const ErrorPerson = ({ name }) => {
  if (name === "error") {
    throw new Error("I crashed!");
  }

  return (
    <div>
      <h1>Person</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default ErrorPerson;
