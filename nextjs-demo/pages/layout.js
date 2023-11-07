import Link from "next/link";

import styles from "../styles/Layout.module.css";

 function Layout({ children }) {
  return (
    <div>
      <ol>
        <li>
          <Link  legacyBehavior href="/">
            <a>Home</a>
          
          </Link>
        </li>
        <li>
          <Link href="/about">
            About Us
          
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          
          </Link>
        </li>
        <li>
          <Link href="/login">
            Logout
          
          </Link>
        </li>
      </ol>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
export default Layout