import ReactDOM from "react-dom";

const PortalComp = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Portals Demo Component</h1>
    </div>,
    document.getElementById("portal-root")
  );
};

export default PortalComp;
