import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../shared/helpers/blog_api";
import styles from "../../styles/Blog.module.css";

type PostPreview = { title: string; name: string; blurb: string };
type BlogProps = { posts: PostPreview[] };

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Ethan McAuliffe's personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.headerText}>Blog</h1>
          <p className={styles.subtitle}>Some of my past projects</p>
        </header>
        {posts.map((post) => (
          <div className={styles.postPreview} key={`${post.name}`}>
            <div className={styles.previewDetails}>
              <h2>
                <Link href={`blog/${post.name}`}>{post.title}</Link>
              </h2>
              <div>
                {/* <div>{post.date}</div> */}
                <div>{post.blurb}</div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = getAllPosts(["title", "name", "blurb"]);
  return { props: { posts } };
}
