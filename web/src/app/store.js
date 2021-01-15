import { configureStore } from '@reduxjs/toolkit';
import reposReducer from '../features/repos/reposSlice';
import visibilityFilterReducer from '../features/filters/filtersSlice';

export default configureStore({
  reducer: {
    repos: reposReducer,
    visibilityFilter: visibilityFilterReducer,
  },
});
