import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import UserRef from './hooks/UseRef';
import UseMemo from './hooks/UseMemo';
import UseCallback from './hooks/UseCallback/UseCallback';
import UseReducer from './hooks/UseReducer';

function App() {
  return (
    <div className='App'>

      <Navbar title={'First App'} isShow={true} />

      <div className='container'>
        <Form heading={'Text Utils'} />

        <hr />

        <UseState heading={'useState Hook'}></UseState>

        <hr />

        <UseEffect heading={'useEffect Hook'}></UseEffect>

        <hr />

        <UserRef heading={'useRef Hook'}></UserRef>

        <hr />

        <UseMemo heading={'useMemo Hook'}></UseMemo>

        <hr />

        <UseCallback heading={'useCallback Hook'}></UseCallback>

        <hr />

        <UseReducer heading={'useReducer Hook'}></UseReducer>
      </div>

    </div>
  )
}

export default App;
