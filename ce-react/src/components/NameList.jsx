const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  return (
    <div>
      {persons.map((person) => (
        <h2 key={person.id}>
          Your name is {person.name}, Age is {person.age} and skill is{" "}
          {person.skill}.
        </h2>
      ))}
    </div>
  );
};

export default NameList;
