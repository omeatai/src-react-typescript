type PeopleProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PeopleProps) => {
  return (
    <div>
      {props.names.map((person) => (
        <h2 key={person.first}>
          {person.first} {person.last}
        </h2>
      ))}
    </div>
  );
};
