import React from "react";

const Hello = () => {
  const content = "Hello Everybody!";
  const contentNode = React.createElement(
    "h1",
    { id: "hello", className: "hello-text" },
    content
  );

  return React.createElement("div", null, contentNode);

  //   return (
  //     <div>
  //       <h1>Hello Everybody</h1>
  //     </div>
  //   );
};
export default Hello;
