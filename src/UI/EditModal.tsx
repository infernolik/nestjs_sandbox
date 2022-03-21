import React, { useRef, useContext } from "react";
import itemContext from "../itemContext/itemContext";

export default function EditModal() {
  const context = useContext(itemContext);
  const textRef = useRef<HTMLInputElement>(null);

  if (!context) return null;
  const { updateTask, currentTask, modalToggle, changeToggle } = context;

  if (!currentTask) return null;
  const { idNum, text, done } = currentTask;

  const handleConfirm = (ev: React.MouseEvent): void => {
    ev.preventDefault();
    if (textRef.current) {
      updateTask({ idNum, text: textRef.current.value, done }, idNum);
    }
    changeToggle(false, "CHANGE_TOGGLE");
  };

  return (
    <div className="back" style={modalToggle ? styles : undefined}>
      <div className="edit-modal">
        <label htmlFor="task">Type the task: </label>
        <input
          type="text"
          name="task"
          id="task"
          defaultValue={text}
          ref={textRef}
        />
        <a href="#!" className="btn" onClick={handleConfirm}>
          Confirm
        </a>
      </div>
    </div>
  );
}

const styles: React.CSSProperties = {
  display: "block",
};
