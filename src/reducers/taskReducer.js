import { handleAction } from 'redux-actions';

const initialState = {
  task: [],
};

const addTask = handleAction(
  'ADD_TASK',
  (state, { payload }) => ({
    ...state,
    task: [...state.task, payload],
  }),
  initialState,
);

export default addTask;
