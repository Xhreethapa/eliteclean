import './App.css';
import Navbar from './compo/Navbar'
import Announcement from './compo/Announcement';
import Home from './compo/Home';


function App() {
  return (
    <div className="App">
      <Announcement/>
      <Navbar/>
      <Home/>


    </div>
  );
}

export default App;
