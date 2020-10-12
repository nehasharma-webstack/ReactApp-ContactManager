import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/includes/Header";
import AddContacts from "./components/contacts/AddContact";
import { Provider } from "./context";
const App = () => {
  //create a object (id,name), place, and age, isAlive
  //TODO Task 2: Create a boolean varibale isAdd=true then you need to
  //display the sum  of two numbers
  //else you need to display "Error"
  // const name = "Neha";
  // const sayHello = false;

  return (
    <Provider>
      <div>
        <Header title="My Contact Manager" />
        {/* <h1>{sayHello ? "Hello" : null}</h1>  */}
        <AddContacts />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
};

export default App;
