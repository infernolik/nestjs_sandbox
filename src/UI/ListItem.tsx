import React, { useEffect, useContext, useRef } from "react";
import { ItemType } from "../tsTypes";
import itemContext from "../itemContext/itemContext";

export default function ListItem(props: { params: ItemType }) {
  const context = useContext(itemContext);
  const checkRef = useRef<HTMLInputElement>(null); // Зачем <HTMLInputElement>? Чтобы дать понять TS, что инпут может иметь свойство checked ?

  if (!context) return null;

  const { updateTask, setCurrent, changeToggle } = context;
  const { idNum, text, done } = props.params;

  const handleChange = (ev: React.MouseEvent): void => {
    ev.preventDefault();
    changeToggle(true, "CHANGE_TOGGLE");
    if (checkRef.current)
      setCurrent({ idNum, text, done: checkRef.current.checked });
  };
  // const handleStatus = (): void => {
  //   if (checkRef.current) {
  //     updateTask({ idNum, text, done: checkRef.current.checked });
  //   }
  // };
  return (
    <div className="list-item">
      <div className="content">
        <p>{idNum}</p>
        <p>{text}</p>
        <label htmlFor="status">Done: </label>
        <input
          defaultChecked={done}
          ref={checkRef}
          type="checkbox"
          name="status"
          id="status"
          // onChange={handleStatus}
        />
      </div>

      <a href="#!" className="btn" onClick={handleChange}>
        Change
      </a>
    </div>
  );
}
