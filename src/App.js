import logo from './logo.svg';
import './App.css';
import HeaderPage from './components/HeaderPage'
import TablePage from './components/TablePage'
import CounterVaue from './components/CounterVaue'

function App() {
  return (
    <div className="App">
    <HeaderPage headerValue="Header Page...!!!"/>
    <TablePage/>
    <CounterVaue/>
    </div>
  );
}

export default App;
