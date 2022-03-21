import React, { useContext, Fragment, useEffect, CSSProperties } from "react";
import itemContext from "../itemContext/itemContext";
import ListItem from "./ListItem";

export default function ItemList() {
  const context = useContext(itemContext);

  useEffect(() => {
    if (context) {
      context.getAllTasks();
    }
  }, [context?.currentTask]);

  if (!context) return null;

  const { changeToggle } = context;

  const handleClick = (ev: React.MouseEvent): void => {
    changeToggle(true, "CHANGE_TOGGLE_ADD");
  };

  const { todos } = context;
  return (
    <Fragment>
      {todos.map((item) => {
        return <ListItem params={item} key={item.idNum} />;
      })}
      <a href="#!" className="btn" style={style} onClick={handleClick}>
        Add Task
      </a>
    </Fragment>
  );
}

let style: CSSProperties = {
  float: "right",
};
