import { createContext } from "react";

const UserContext = createContext("Ifeanyi");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

// export const UserContext = createContext();

// const UserContextProvider = (props) => {
//   const [username, setUsername] = useState({
//     name: "Vishwas",
//   });

//   return (
//     <UserContext.Provider value={{ username, setUsername }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;
