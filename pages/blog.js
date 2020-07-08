import React from "react";

import { css } from "@emotion/css";
import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";

import axios from "axios";
import Link from "next/link";

const PostsContainer = styled("div")`
  width: 100%;
`;

const Blog = (props) => {
  const { posts } = props;
  return (
    <div className={css(tw`grid justify-center items-center h-screen`)}>
      {posts.map((post) => {
        return (
          <PostsContainer css={tw("justify-center")} key={post.id}>
            <h1 style={{ fontSize: "3rem" }}>{post.id}</h1>
            <Link as={`/post/${post.id}`} href={`/post/[id]`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.content}</p>
          </PostsContainer>
        );
      })}
    </div>
  );
};

Blog.getInitialProps = async (ctx) => {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res)
    .catch();
  const posts = res.data.slice(0, 10);
  return {
    posts,
  };
};

export default Blog;
