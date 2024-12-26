
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, resettodo } from '../Redux/Slices/TodoSlice';
import { Container } from '@mui/system';
import { reset } from '../Redux/Slices/Slice';

function Todo() {
  const tasks = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [newtasks, setnewtasks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(newtasks));
    setnewtasks('');
  };

  const handleDelete = (index) => {
    dispatch(remove(index)); // Passing index to remove action
  };

  const handlereset=()=>{
    dispatch(resettodo())
  }

  const handleChange = (e) => {
    setnewtasks(e.target.value);
  };

  return (
    <div className='bg-yellow-200 py-7 flex flex-col justify-center items-center'>
      <h1 className='ml-4 my-7 font-bold text-3xl text-white'>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border mx-3 px-3 py-2 rounded"
          type="text"
          onChange={handleChange}
          value={newtasks}
        />
        <button className="border mx-3 px-3 bg-yellow-600 py-1" type="submit">
          Submit
        </button>
      </form>
      <ol>
        {tasks.map((task, index) => (
          <li className='mt-3 ml-4 ' key={index}>
           <span className='bg-red-300 rounded mr-3 px-4 mt-3'> {task}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
      <button className='mt-6 px-2 py-1 bg-gray-500 rounded text-white' onClick={handlereset}>Reset All</button>
    </div>
  );
}

export default Todo;
