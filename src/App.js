import React from "react";
import './App.css'
import {action,orginals} from './urls'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url = {orginals} title = 'Netflix Orginals'/>
      <RowPost url = {action} title = 'Actions' isSmall/>
    </div>
  )
}

export default App;
