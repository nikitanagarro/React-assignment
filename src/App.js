import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MasterList from './pages/masterList'
import DetailView from './pages/details';
import { Suspense } from 'react';
import { lazy } from 'react';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MasterList />} />
        <Route path='/details' element={<DetailView />} />
      </Routes>
    </div>
  );
}

export default App;
