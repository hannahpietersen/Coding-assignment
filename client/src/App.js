import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import List from "./components/List/List";
import Details from "./components/Details/Details"






function App() {
  return (
    <>
    <Routes>
      
     
      
      <Route path='/' element={<List />}></Route>
      <Route path='/details' element={<Details />}></Route>
    
      </Routes>
    </>
  );
}

export default App;
