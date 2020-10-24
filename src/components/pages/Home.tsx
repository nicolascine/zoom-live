import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules/combineReducers';

export const Home: React.FC<{}> = () => {
  const data = useSelector((state: RootState) => state.todo.data);

  console.log(data);

  return (
    <aside>
      <h2>HomePage</h2>
    </aside>
  );
};
