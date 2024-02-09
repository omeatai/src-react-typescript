function ChildComponent(props) {
  return (
    <>
      <div>
        <button onClick={props.greetHandler}>Greet Parent</button>
      </div>
      <div>
        <button onClick={() => props.greetHandlerWithID(3)}>
          Greet Parent with Child ID.
        </button>
      </div>
    </>
  );
}

export default ChildComponent;
