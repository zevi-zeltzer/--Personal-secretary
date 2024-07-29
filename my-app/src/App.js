import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import Time from './Time';
import ButAlert from './ButAlert';

const titleName = prompt("Please enter a title name!!");

function App() {
  
  return (
    <div className="App">
      <h1>{titleName}</h1>
      <ListItems/>
      <Time/>
      <ButAlert/>
    </div>
  );
}

export default App;
