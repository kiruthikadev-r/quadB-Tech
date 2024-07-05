export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_TASKS = 'SET_TASKS';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const editTask = (taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: { taskId, updatedTask },
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});
