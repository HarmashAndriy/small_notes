import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Notes from './components/Notes/Notes';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Notes />
    </div>
  );
}

export default App;
