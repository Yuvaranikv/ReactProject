
import './App.css';
import Counter from './Counter';
import SignUpForm from './SignUpForm';

import ToDoApp from './ToDoApp';
import ToDoList from './ToDoList';


function App() {
  const name = "Yuvarani";

  return (
    <div>
     
      <ToDoApp name={name} />
     <Counter></Counter>
    
     <SignUpForm></SignUpForm>

     <ToDoList></ToDoList>
    </div>
  );
}

export default App;


