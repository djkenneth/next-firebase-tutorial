import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { db } from "../firebase/initFirebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "@firebase/firestore";

export default function Home() {
  const [name, setNewName] = useState("");
  const [age, setNewAge] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: name, age: Number(age) });
  };

  const UpdateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newField = { age: age + 1 };
    await updateDoc(userDoc, newField);
  };

  const DeleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUsers();
  }, [usersCollectionRef]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next with Firebase Tutorial</title>
        <meta name="description" content="Learning nextjs and firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="custom-color">ADD USER</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setNewAge(e.target.value)}
        />
        <input type="button" onClick={createUser} value="Create User" />
        {users.map((user) => {
          return (
            <div
              key={user.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <h3>Name: {user.name} &nbsp;</h3>
              <h3>Age: {user.age} &nbsp;</h3>
              <div>
                <button onClick={() => UpdateUser(user.id, user.age)}>
                  Update
                </button>
              </div>
              <div>
                <button onClick={() => DeleteUser(user.id)}>Delete User</button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
