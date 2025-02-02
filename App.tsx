// import Alert from "./components/Alert";
import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

// function App() {
//   let items = ["Indonesia", "Arab", "Singapore", "Thailand", "Vietnam", "Rusia", "Japanese"];
//   let itemss = ["Cianjur", "Bandung", "Jakarta", "Sukabumi", "Tangerang", "Ciamis", "Tasikmalaya"];
//   let itemsss = ["Kab Cianjur", "Kab Bandung Barat"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }
//   return <>
//     <ListGroup items={items} heading='Negara' onSelectItem={handleSelectItem}/>
//     <ListGroup items={itemss} heading='Kota' onSelectItem={handleSelectItem}/>
//     <ListGroup items={itemsss} heading='Kabupaten' onSelectItem={handleSelectItem}/>
//   </>
// }
// export default App;

function App() {
  //hook state
  const [alertVisible, setAlertVisibilty] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() =>
        setAlertVisibilty(false)}>My Alert</Alert>}
      <button color="danger" onClick={() =>
        setAlertVisibilty(true)}>My Button</button>
    </div>
  );
}

export default App;
