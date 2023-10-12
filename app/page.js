import Link from "next/link";
import styles from "./page.module.css";

import Header from "./components/Header";
import { bellefair, barlow_Condensed } from "./fonts";

export default async function Home() {
  return (
    <main className={`${styles.main} grid`}>
      <Header />
      <Content />
    </main>
  );
}

const Content = () => {
  return (
    <div className={`grid gridContainer ${styles.containerHome}`}>
      <div className={`${styles.intro} flex`}>
        <h2
          className={`${barlow_Condensed.className} fs500 fw400 ls4-725 uppercase`}
        >
          So, you want to travel to
        </h2>
        <h1
          className={`${bellefair.className} textNeutral100 fs900 fw400 uppercase`}
        >
          Space
        </h1>
        <p className={`lh1-78 w50ch`}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link
        href="/destination"
        className={`${bellefair.className} ${styles.btnExplore}`}
      >
        Explore
      </Link>
    </div>
  );
};
