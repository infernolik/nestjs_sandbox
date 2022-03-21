import React from "react";
import "./App.css";
import ItemState from "./itemContext/ItemState";
import ItemList from "./UI/ItemList";
import EditModal from "./UI/EditModal";
import AddModal from "./UI/AddModal";

function App() {
  return (
    <ItemState>
      <div className="main">
        <ItemList />
      </div>
      <EditModal />
      <AddModal />
    </ItemState>
  );
}

export default App;
