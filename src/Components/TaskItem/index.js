import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../../redux/actions';

const TaskItem = ({ task, index, onEdit }) => {
  console.log(task);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask(index));
  };

  const handleToggle = () => {
    dispatch(toggleTask(index));
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <button onClick={() => onEdit(index)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
