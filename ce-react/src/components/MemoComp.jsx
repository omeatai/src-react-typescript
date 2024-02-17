import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Comp");

  return (
    <div>
      <h1>MemoComp</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default React.memo(MemoComp);
