import './App.css';
import MyButton from './Component/Button';

function App() {
  return (
    <div className="App">
     <MyButton text={'click Me'} onClick={()=> alert('okay')} />
    </div>
  );
}

export default App;
