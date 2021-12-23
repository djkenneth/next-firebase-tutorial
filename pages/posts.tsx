import { GetStaticProps, NextPage } from "next";
import { Character, GetCharacterResults } from "../types";
import { storage } from "../firebase/initFirebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import Image from "next/image";

const Posts: NextPage = () => {
  const [progress, setProgress] = useState(0);
  const [image, setImagge] = useState("");
  console;
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setImagge(url));
      }
    );
  };

  return (
    <div>
      <h1>Post page</h1>
      <form onSubmit={formHandler}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>

      <hr />

      <h3>Uploaded {progress} %</h3>

      <Image
        src={`https://firebasestorage.googleapis.com/v0/b/fir-tutorial-e6026.appspot.com/o/files%2Fpexels-luis-gomes-546819.jpg?alt=media&token=188c73f4-181f-4738-9788-92fcd46d3304`}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      {image && progress == 100 ? (
        <Image
          src={image}
          alt="Picture of the author"
          width="auto"
          height="auto"
        />
      ) : null}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Posts;
