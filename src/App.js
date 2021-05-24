import './App.css';
import { useEffect } from 'react';
import { getUser } from './redux/ducks/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state)=> state.user);
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        Redux Toolkit Saga Example
        
      </header>
    </div>
  );
}

