import { GetStaticProps, NextPage } from "next";
import { Character, GetCharacterResults } from "../types";
import { storage } from "../firebase/initFirebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import Image from "next/image";
// import { withProtected } from "../hooks/route";

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

      {/* <Image
        src="https://images.pexels.com/photos/10489571/pexels-photo-10489571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}
      {image && progress == 100 ? (
        <Image
          src={image}
          alt="Picture of the author"
          width={500}
          height={500}
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

// export default withProtected(Posts);
export default Posts;
