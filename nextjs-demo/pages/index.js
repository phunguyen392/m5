import Link from 'next/link';
import Layout from "./layout";
import { getStudents } from "./mock-data/data"; 
import styles from '../styles/Home.module.css';


function Home() {
  return (
   <Layout>

   
   
    <div className={styles.container}>
    <main className={styles.main}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {getStudents().map(student => (
            <tr className={styles.tr} key={student.id}>
              <td className={styles.td}>{student.id}</td>
              <td className={styles.td}>{student.name}</td>
              <td className={styles.td}>
                <Link href={`/student/${encodeURIComponent(student.id)}`}>
                  <h6>Show</h6>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  </div>
  </Layout>
  );
}

export default Home;