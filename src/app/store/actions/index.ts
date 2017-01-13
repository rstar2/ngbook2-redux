import * as ThreadsActions from './threads-actions';
import * as UserActions from './user-actions';

// export here for object imports
export { ThreadsActions, UserActions };

// export here for injecting the dependencies (e.g. at bootstrap)
export default [ThreadsActions, UserActions];
