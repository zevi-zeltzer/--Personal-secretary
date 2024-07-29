import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import Time from './Time';
import ButAlert from './ButAlert';

function App() {
  return (
    <div className="App">
      <h1>Personal diary</h1>
      <ListItems/>
      <Time/>
      <ButAlert/>
    </div>
  );
}

export default App;
