import './App.css';
import { useEffect } from 'react';
import { getUser } from './redux/ducks/user';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state)=> state.user.user);
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
         Redux Saga Example
      </header>
    </div>
  );
}

