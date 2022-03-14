import './App.css';
import Todolista from "./TodoLista";

function App() {
  const data = [
    {"otsikko": "Ykkönen"},
    {"otsikko": "Kakkonen"},
    {"otsikko": "kolmonen"},
  ];
  return (
    <div className="App">
      <Todolista iteemit={data}/>
    </div>
  );
}

export default App;
