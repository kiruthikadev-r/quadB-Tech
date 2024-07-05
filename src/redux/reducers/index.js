import { ADD_TASK, REMOVE_TASK, EDIT_TASK, SET_TASKS, TOGGLE_TASK } from '../actions';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, completed: false }],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.taskId ? action.payload.updatedTask : task
        ),
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
