import { useState } from "react";
import Header from "./Header"; 

function HeaderWithButton() {
  const [title, setTitle] = useState("My name is naveen");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
    </div>
  );
}

export default HeaderWithButton;
