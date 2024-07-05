import React, { useState } from 'react';
import TaskItem from '../TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import { editTask } from '../../redux/actions';


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editableTaskIndex, setEditableTaskIndex] = useState(null);
  const [taskInput, setTaskInput] = useState('');

  const handleEdit = (index) => {
    setEditableTaskIndex(index);
    setTaskInput(tasks[index].text);
  };

  const handleSave = (index) => {
    dispatch(editTask(index, { text: taskInput, completed: tasks[index].completed }));
    setEditableTaskIndex(null);
    setTaskInput('');
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index}>
          {editableTaskIndex === index ? (
            <div className='task-input'>
              <input  
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
              />
              <button className='edit-save-btn' onClick={() => handleSave(index)}>Save</button>
            </div>
          ) : (
            <TaskItem
              task={task}
              index={index}
              onEdit={() => handleEdit(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
