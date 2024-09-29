import {  Route, Routes } from 'react-router-dom';
import './App.css';
import MasterList from './pages/masterList'
import DetailView from './pages/details';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MasterList />} />
        <Route path='/details/:id' element={<DetailView />} />
      </Routes>
    </div>
  );
}

export default App;
