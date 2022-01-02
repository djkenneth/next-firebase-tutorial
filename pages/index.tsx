// -----------------------  INDEX   --------------------------------- //

// import { useEffect, useState } from "react";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import { db } from "../firebase/initFirebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "@firebase/firestore";
// import { Text } from "@chakra-ui/react";
// import { useAuth } from "../lib/authProvider";

// export default function Home() {
//   const { currentUser } = useAuth();

//   const [name, setNewName] = useState("");
//   const [age, setNewAge] = useState("");

//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "users");

//   const createUser = async () => {
//     await addDoc(usersCollectionRef, { name: name, age: Number(age) });
//   };

//   const UpdateUser = async (id, age) => {
//     const userDoc = doc(db, "users", id);
//     const newField = { age: age + 1 };
//     await updateDoc(userDoc, newField);
//   };

//   const DeleteUser = async (id) => {
//     const userDoc = doc(db, "users", id);
//     await deleteDoc(userDoc);
//   };

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(
//         data.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }))
//       );
//     };
//     getUsers();
//   }, [usersCollectionRef]);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Next with Firebase Tutorial</title>
//         <meta name="description" content="Learning nextjs and firebase" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <Text>{`The current user is: ${currentUser}`}</Text>
//         <h1 className="custom-color">ADD USER</h1>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setNewName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           onChange={(e) => setNewAge(e.target.value)}
//         />
//         <input type="button" onClick={createUser} value="Create User" />
//         {users.map((user) => {
//           return (
//             <div
//               key={user.id}
//               style={{ display: "flex", alignItems: "center" }}
//             >
//               <h3>Name: {user.name} &nbsp;</h3>
//               <h3>Age: {user.age} &nbsp;</h3>
//               <div>
//                 <button onClick={() => UpdateUser(user.id, user.age)}>
//                   Update
//                 </button>
//               </div>
//               <div>
//                 <button onClick={() => DeleteUser(user.id)}>Delete User</button>
//               </div>
//             </div>
//           );
//         })}
//       </main>
//     </div>
//   );
// }

// -----------------------  INDEX 2  --------------------------------- //
import NextLink from "next/link";
import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
  Link,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Heading>
        Firebase Authentication
        <chakra.span
          fontWeight="black"
          fontStyle="italic"
          fontSize="9xl"
          mx={2}
        >
          v9
        </chakra.span>
        <Badge
          fontWeight="black"
          fontSize="4xl"
          mx={2}
          px={2}
          colorScheme="green"
        >
          NEW API
        </Badge>
      </Heading>
      <OrderedList fontSize="3xl" my={4}>
        <ListItem>Email password authentication (Register/Login)</ListItem>
        <ListItem>Google Sign in</ListItem>
        <ListItem>Forgot Password</ListItem>
        <ListItem>Custom Reset password page</ListItem>
        <ListItem>Protected routes</ListItem>
        <ListItem>
          <Code fontSize="inherit"> Redirect TO</Code> or Back (keeping the
          state)
        </ListItem>
        <ListItem>
          custom Auth Hook <Code fontSize="3xl">useAuth()</Code>
        </ListItem>
        <ListItem>Loading indicators while sign-in/up</ListItem>
        <ListItem>
          Dark Mode enabled template using
          <Badge
            fontSize="inherit"
            colorScheme="teal"
            mx={2}
            textTransform="capitalize"
            borderRadius="md"
          >
            Chakra UI
          </Badge>
        </ListItem>
      </OrderedList>
      <Heading size="md" mt={20}>
        Some other links (only for reference):
      </Heading>
      <List>
        <ListItem>
          <NextLink href="/reset-password">
            <Link>reset page</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/forgot-password">
            <Link>forgot page</Link>
          </NextLink>
        </ListItem>
      </List>
    </Layout>
  );
};

export default Home;
