import React, { useEffect } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";

const Blog = ({ blogs }) => {
  const [blogList, setBlogList] = React.useState([]);
  useEffect(() => {
    setBlogList(blogs?.blogs || []);
  }, [blogs]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Blogs</h2>
      <div className={styles.grid}>
        {blogList.length > 0 ? (
          blogList.map((e, i) => (
            <Link key={i} href={`/blogpost/${e.slug}`} className={styles.card}>
              <h3>{e.title}</h3>
              <p>{e.excerpt}</p>
              <span className={styles.meta}>
                📅 {e.date} • ⏱ {e.readTime}
              </span>
            </Link>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const jsonDirectory = path.join(process.cwd(), "data");
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, "blog.json"),
      "utf8"
    );
    const data = JSON.parse(fileContents);

    return {
      props: {
        blogs: data,
      },
    };
  } catch (error) {
    console.error("Error loading blogs:", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default Blog;



// export async function getServerSideProps(context){
//   try {
//     let res = await axios.get("http://localhost:3000/api/blogs")
  
//   return {
//     props: {
//       blogs: res.data,
//     }
//   }
//   } catch (error) {
//     props: {
//       blogs: []
//     }
//   }
// }