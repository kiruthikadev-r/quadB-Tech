import React, { useEffect } from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks } from './redux/actions';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      dispatch(setTasks(JSON.parse(savedTasks)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <h1>React To-Do Application</h1>
      <div>
        
      </div>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
