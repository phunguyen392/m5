import Layout from "./layout";
import Link from "next/link";
import styles from '../styles/Login.module.css';


function Blog() {
  return (
    <Layout>
      <h1>Blog page</h1>
      <Link class={styles.button} href="/" >Back</Link>
    </Layout>
  )
}

export default Blog