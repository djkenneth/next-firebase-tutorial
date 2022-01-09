// import { GetStaticProps } from "next";
// import { db } from "../firebase/initFirebase";
// import { collection, addDoc } from "@firebase/firestore";

// const Vehicle = ({ vehicles }) => {
//   return (
//     <div>
//       <ul>
//         {vehicles.map((data, index) => {
//           return <li key={index}>{data.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const res = await fetch("http://localhost:3000/api/vehicles");
//   const vehicles = await res.json();

//   if (!vehicles) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { vehicles },
//   };
// };

// export default Vehicle;

const Vehicle = () => {
  return <div>Hello Vehicle Page</div>;
};

export default Vehicle;
