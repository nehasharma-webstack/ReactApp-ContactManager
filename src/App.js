import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/includes/Header";
import AddContacts from "./components/contacts/AddContact";
import { Provider } from "./context";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  //create a object (id,name), place, and age, isAlive
  //TODO Task 2: Create a boolean varibale isAdd=true then you need to
  //display the sum  of two numbers
  //else you need to display "Error"
  // const name = "Neha";
  // const sayHello = false;

  return (
    <Provider>
      <Router>
        <div>
          <Header title="My Contact Manager" />
          {/* <h1>{sayHello ? "Hello" : null}</h1>  */}

          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/add-contact" component={AddContacts} />
              <Route exact path="/about/:id" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
