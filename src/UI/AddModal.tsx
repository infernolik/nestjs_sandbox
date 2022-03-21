import React, { useContext, useRef } from "react";
import itemContext from "../itemContext/itemContext";

export default function AddModal() {
  const checkRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const context = useContext(itemContext);

  if (!context) return null;

  const { modalToggle_ADD, addTodo, changeToggle } = context;

  const handleClick = (): void => {
    if (textRef.current && checkRef.current) {
      addTodo({
        idNum: Math.random() + 3,
        text: textRef.current.value,
        done: checkRef.current.checked,
      });
      changeToggle(false, "CHANGE_TOGGLE_ADD");
    }
  };

  return (
    <div className="back" style={modalToggle_ADD ? styles : undefined}>
      <div className="edit-modal">
        <label htmlFor="task">Type the task: </label>
        <input type="text" name="task" id="task" ref={textRef} />
        <input ref={checkRef} type="checkbox" name="status" id="status" />
        <a href="#!" className="btn" onClick={handleClick}>
          Confirm
        </a>
      </div>
    </div>
  );
}

const styles: React.CSSProperties = {
  display: "block",
};
