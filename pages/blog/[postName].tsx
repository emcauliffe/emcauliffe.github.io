import { NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { getAllPosts, getPostByName } from "../../shared/helpers/blog_api";
import markdownToHtml from "../../shared/helpers/markdown_to_html";
import styles from "../../styles/Post.module.css";

type PostProps = { post: { [key: string]: any } };

type ImgProps = { src: string; alt: string };
type PassedComponents = { img: ({ src, alt }: ImgProps) => JSX.Element };

const components: PassedComponents = {
  img: function LinkImage({ src, alt }) {
    return (
      <a href={src}>
        <img src={src} alt={alt} />
      </a>
    );
  },
};

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ethan McAuliffe</title>
        <meta name="description" content="My personal website and blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.backButton}>
        <Link href="/blog">◀ All Posts</Link>
      </div>

      <h1>{post.title}</h1>
      <MDXRemote {...post.content} components={components} />
    </div>
  );
};

export default Post;

type Params = { params: { postName: string } };

export async function getStaticProps({ params }: Params) {
  const post = getPostByName(params.postName, [
    "title",
    "date",
    "name",
    "author",
    "content",
    "ogImage",
    "feature-img",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["name"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          postName: post.name,
        },
      };
    }),
    fallback: false,
  };
}
