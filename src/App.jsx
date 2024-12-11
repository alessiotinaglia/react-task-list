
import './App.css'
import TaskComponent from "./components/TaskComponent";
import TaskNoComponent from "./components/TaskNoComponent";


function App() {
  // parte logica
  const title = "Task Manager"
  const taskComponent = "Current Tasks (4)"
  const taskNoComponent = "Completed Tasks (6)"

  // parte html
  return (
    <>
      {/* titolo */}
      <header><h1>{title}</h1></header>
      {/* prima sezione */}
        <div><h2>{taskComponent}</h2>
        <ul><TaskComponent /></ul>
        </div>
        {/* linea grigia */}
      <hr />
      {/* seconda sezione */}
      <div><h2>{taskNoComponent}</h2>
        <ul><TaskNoComponent /></ul>
      </div>




    </>
  );
};

export default App;
