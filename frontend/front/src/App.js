import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "./Login";
import BookList from "./BookList";

 function App() {
  return (
    <div className="App">
      <Routes>
       
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/book-list" element={<BookList/>}>
          </Route>
     
      </Routes>
    </div>
  );
}
export default App;
