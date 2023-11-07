import Layout from "./layout";
import Link from "next/link";


function About() {
  return (
    <Layout>
      <h1>About page</h1>
      <Link href="/" >Back</Link>
    </Layout>
  )
}

export default About