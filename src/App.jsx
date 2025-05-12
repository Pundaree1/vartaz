import { useState } from "react";
import Board from "./components/board";
import Navbar from "./components/Navbar";
import Searchbar from "./components/searchbar";

function search(){
  return(
    <div className="App">
      <div className="search-bar-container">
        <Searchbar/>
        <div>SearchResults</div>
      </div>
    </div>
  )
}
const App = () => {
  const[category,setCategory]=useState("general")
  
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Board category={category}/>
    </div>
  );
}

export default App;
