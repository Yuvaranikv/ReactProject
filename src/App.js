
import './App.css';
import Counter from './Counter';
import SignUpForm from './SignUpForm';
import ToDoApp from './ToDoApp';
import ToDoList from './ToDoList';
import WithMemo from './WithMemo';
import WithoutMemo from './WithoutMemo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Jeopardy from './Jeopardy';

function App() {
  const name = "Yuvarani";

  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          {/* <ToDoApp name={name} /> */}
          <Route path='/' element={<ToDoApp name={name} />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/WithoutMemo' element={<WithoutMemo />} />
          <Route path='/Withmemo' element={<WithMemo />} />
          <Route path='*' element={<NotFound />}/>
          <Route path='Jeopardy' element={<Jeopardy/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


