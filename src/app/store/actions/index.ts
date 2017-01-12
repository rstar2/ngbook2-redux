import * as ThreadsActions from './threads-actions';
import * as UsersActions from './users-actions';

// export here for object imports
export { ThreadsActions, UsersActions };

// export here for injecting the dependencies (e.g. at bootstrap)
export default [ThreadsActions, UsersActions];
