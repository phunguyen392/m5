
import Layout from "./layout";
import Link from "next/link";
import styles from '../styles/Login.module.css';

export async function getServerSideProps(context) {
    // fetch dữ liệu từ file system, API, DB,...
  
    // Giá trị của `props` sẽ được truyền tới component `Home`
    return {
      props:{
        name:"Nghia",
         age:18
    }
    }
  }
function Students(props) {
  return (
    <Layout>
      <h1>Student</h1>
      <p>{ props.name }</p>
      <p>{ props.age }</p>

      <Link class={styles.button} href="/" >Back</Link>
    </Layout>
  )
}

export default Students