import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/header.component';
import Home from './Components/home.component';
import Search from './Components/search.component';
import Recs from './Components/recs.component';
import Profile from './Components/profile.component';

function App() {
  return (
    <div className="App">
      <Header></Header>


      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recs" element={<Recs />} />
          <Route path="/profile" element={<Profile />} />
       </Routes>
    </div>
  );
}

export default App;
