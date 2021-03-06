import { createSelector } from 'reselect';
import { Action } from "redux";

import { Thread, Message } from "../../model";
import { ThreadsState, initialState, ThreadsEntities } from "../state/threads-state";
import { ThreadsActions } from "../actions";
import { AppState } from "../state";


/**
 * The `ThreadsReducer` describes how to modify the `ThreadsState` given a
 * particular action.
 */
export const ThreadsReducer =
  function (state: ThreadsState = initialState, action: Action): ThreadsState {
    switch (action.type) {

      // Adds a new Thread to the list of entities
      case ThreadsActions.ADD_THREAD: {
        const thread = (<ThreadsActions.AddThreadAction>action).thread;

        if (state.ids.includes(thread.id)) {
          return state;
        }

        return {
          ids: [...state.ids, thread.id],
          currentThreadId: state.currentThreadId,
          entities: Object.assign({}, state.entities, {
            [thread.id]: thread
          })
        };
      }

      // Adds a new Message to a particular Thread
      case ThreadsActions.ADD_MESSAGE: {
        const thread = (<ThreadsActions.AddMessageAction>action).thread;
        const message = (<ThreadsActions.AddMessageAction>action).message;

        // special case: if the message being added is in the current thread, then
        // mark it as read
        const isRead = message.thread.id === state.currentThreadId ?
          true : message.isRead;
        const newMessage = Object.assign({}, message, {isRead: isRead});

        // grab the old thraed from entities
        const oldThread = state.entities[thread.id];

        // create a new thread which has our newMessage
        const newThread = Object.assign({}, oldThread, {
          messages: [...oldThread.messages, newMessage]
        });

        return {
          ids: state.ids, // unchanged
          currentThreadId: state.currentThreadId, // unchanged
          entities: Object.assign({}, state.entities, {
            [thread.id]: newThread
          })
        };
      }

      // Select a particular thread in the UI
      case ThreadsActions.SELECT_THREAD: {
        const thread = (<ThreadsActions.SelectThreadAction>action).thread;
        const oldThread = state.entities[thread.id];

        // mark the messages as read
        const newMessages = oldThread.messages.map(
          (message) => Object.assign({}, message, {isRead: true}));

        // give them to this new thread
        const newThread = Object.assign({}, oldThread, {
          messages: newMessages
        });

        return {
          ids: state.ids,
          currentThreadId: thread.id,
          entities: Object.assign({}, state.entities, {
            [thread.id]: newThread
          })
        };
      }

      default:
        return state;
    }
  };

const getThreadsState = (state: AppState): ThreadsState => state.threads;

export const getThreadsEntities = createSelector(
  getThreadsState,
  (state: ThreadsState) => state.entities);

export const getAllThreads = createSelector(
  getThreadsEntities,
  (entities: ThreadsEntities) => Object.keys(entities)
    .map((threadId) => entities[threadId]));

export const getUnreadMessagesCount = createSelector(
  getAllThreads,
  (threads: Thread[]) => threads.reduce(
    (unreadCount: number, thread: Thread) => {
      thread.messages.forEach((message: Message) => {
        if (!message.isRead) {
          ++unreadCount;
        }
      });
      return unreadCount;
    },
    0));

// This selector emits the current thread
export const getCurrentThread = createSelector(
  getThreadsEntities,
  getThreadsState,
  (entities: ThreadsEntities, state: ThreadsState) =>
    entities[state.currentThreadId]);

export const getAllMessages = createSelector(
  getAllThreads,
  (threads: Thread[]) =>
    threads.reduce( // gather all messages
      (messages, thread) => [...messages, ...thread.messages],
      []).sort((m1, m2) => m1.sentAt - m2.sentAt)); // sort them by time
