
import UserList from './components/Molecule/UserList/UserList';
import './App.css';

function App() {
  const tasks = [
    { id: 1, title: "Ranjann" },
    { id: 2, title: "Ankit" },
    { id: 3, title: "Rahul" },
  ];
  return (
    <div className='container'>
      <UserList tasks={tasks} />
    </div>
  )
}

export default App;
