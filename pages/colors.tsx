// import { useEffect, useState } from "react";
// import { db } from "../firebase/initFirebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   // updateDoc,
//   deleteDoc,
//   setDoc,
//   doc,
// } from "@firebase/firestore";

// interface Color {
//   color: string;
// }

// const Dot: React.FC<Color> = ({ color }) => {
//   const style = {
//     height: 25,
//     width: 25,
//     margin: "0 10px",
//     backgroundColor: color,
//     borderRadius: "50%",
//     display: "inline-block",
//   };
//   return <span style={style}></span>;
// };

// export default function Colors() {
//   const [colors, setColors] = useState([]);
//   const [name, setName] = useState("");
//   const [value, setValue] = useState("");

//   const colorsCollectionRef = collection(db, "colors");

//   const addColor = async () => {
//     await addDoc(colorsCollectionRef, { name: name, value: value });
//   };

//   const updateColor = async ({ id, name, value }) => {
//     const colorDoc = doc(db, "colors", id);
//     const updateName = prompt("Enter Color Name:");
//     const UpdateValue = prompt("Enter Color hash");
//     setDoc(colorDoc, { name: updateName, value: UpdateValue });
//   };

//   const deleteColor = async (id) => {
//     const colorDoc = doc(db, "colors", id);
//     await deleteDoc(colorDoc);
//   };

//   useEffect(() => {
//     const getColors = async () => {
//       const data = await getDocs(colorsCollectionRef);
//       setColors(
//         data.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }))
//       );
//     };
//     getColors();
//   }, [colorsCollectionRef]);

//   return (
//     <div className="container">
//       <input
//         type="text"
//         placeholder="Color"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Color Hash"
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button className="button" onClick={addColor}>
//         Add
//       </button>
//       <ul>
//         {colors.map((color) => {
//           return (
//             <li key={color.id}>
//               <button className="button2" onClick={() => updateColor(color)}>
//                 edit
//               </button>
//               <button className="button2" onClick={() => deleteColor(color.id)}>
//                 delete
//               </button>
//               <Dot color={color.value} /> {color.name}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// // export default Colors;

const Colors = () => {
  return <div>Hello Color page</div>;
};

export default Colors;

// Colors.requireAuth = true;
