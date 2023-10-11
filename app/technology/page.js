"use client";

import Header from "../components/Header";
import styles from "./page.module.css";
import Image from "next/image";
import { barlow_Condensed, bellefair } from "../fonts";
import { useState } from "react";
import { TabOrdered } from "../components/Tab";

import data from "public/json/data.json";

export default function Technology() {
  const [index, setIndex] = useState(0);
  const { technology } = data;

  return (
    <main className={styles.main}>
      <Header />
      <Content techData={technology} index={index} setIndex={setIndex} />
    </main>
  );
}

const Content = ({ techData, index, setIndex }) => {
  const { name, images, description } = techData[index];

  return (
    <div className={`grid gridContainer ${styles.containerTech}`}>
      <h1
        id={styles.title}
        className={`${barlow_Condensed.className} textNeutral100 fs500 fw400 ls4-725 mt4-75 uppercase`}
      >
        <span className={`fw700 op-25 mr1-75`}>03</span>
        Space Launch 101
      </h1>

      <TabOrdered
        id={styles.tabOrdered}
        className={`${bellefair.className} flex`}
        items={["1", "2", "3"]}
        index={index}
        setIndex={setIndex}
      />

      <TechContent
        id={styles.techContent}
        content={{ name: name, description: description }}
      />

      <Image
        id={styles.heroImg}
        src={images.portrait}
        width={515}
        height={527}
        alt={`Picture of ${name}`}
      />
    </div>
  );
};

const TechContent = ({ id, content }) => {
  return (
    <div id={id}>
      <div className={`${barlow_Condensed.className} fs200 ls2-7 uppercase`}>
        The terminology...
      </div>
      <h2
        className={`${bellefair.className} mt1 textNeutral100 fs700 fw400 uppercase`}
      >
        {content.name}
      </h2>
      <p className="mt1-5 lh1-78 w50ch">{content.description}</p>
    </div>
  );
};
