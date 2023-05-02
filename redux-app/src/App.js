import './App.css';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions';

function App() {
  const counterState = useSelector((state) => state.inc_dec);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar title={'Redux App'} />

      <div className=" container my-5">
        <h1>Counter : {counterState}</h1>

        <div className='mt-4'>
          <button className='btn btn-success action-btn' onClick={ () => dispatch(increase) }>+</button>
          <button className='btn btn-danger ms-2 action-btn' onClick={ () => dispatch(decrease) }>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
