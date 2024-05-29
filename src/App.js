
import './App.css';
import Counter from './Counter';
import SignUpForm from './SignUpForm';

import ToDoApp from './ToDoApp';

function App() {
  const name = "Yuvarani";

  return (
    <div>
     
      <ToDoApp name={name} />
     <Counter></Counter>
    
     <SignUpForm></SignUpForm>
    </div>
  );
}

export default App;


