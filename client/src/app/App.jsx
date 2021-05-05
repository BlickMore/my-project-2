import React from "react";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../components/Register/Register";

 
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/registration" component={Register}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}
