import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Student = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-..."
          crossorigin="anonymous"
        />
      </Head>

      <h2>Student Information</h2>
      <p>Student: {id}</p>
      <Link href="/" legacyBehavior>
        <a className="btn btn-primary" role="button">
          Back
        </a>
      </Link>
    </div>
  );
};

export default Student;