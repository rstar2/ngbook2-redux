import { OpaqueToken } from '@angular/core';
import { StoreEnhancer, Store, createStore, compose } from "redux";

import { AppState } from "./state";
import appReducer from "./reducers";

export const APP_STORE_TOKEN = new OpaqueToken('App.store');

const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

const store: Store<AppState> = createStore<AppState>(
  appReducer,
  compose(devtools)
);
export function factoryStore() { return store;}

export const appStateProvider =
  { provide: APP_STORE_TOKEN, useFactory: factoryStore };


