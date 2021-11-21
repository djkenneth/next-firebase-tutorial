import { GetStaticProps, NextPage } from "next";
import { Character, GetCharacterResults } from "../types";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: NextPage<{ characters: Character[] }> = ({ characters }) => {
  // console.log(characters);
  return (
    <div>
      {/* <ul>
        {posts.map((post) => {
          <li key={post.id}>{post.id}</li>;
        })}
      </ul> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Posts;
