import React from "react";

const FRefChild = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRefChild;

// import React, { Component } from "react";

// class FRefChild extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     );
//   }
// }

// export default FRefChild;
