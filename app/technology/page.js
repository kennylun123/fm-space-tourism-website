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
    <main className={`${styles.main} grid`}>
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
        className={`${barlow_Condensed.className} textNeutral100 fs500 fw400 ls4-725 mt4-75 md-mt-2-5 sm-mt-1-5 uppercase`}
      >
        <span className={`fw700 op-25 mr1-75 sm-mr-1`}>03</span>
        Space Launch 101
      </h1>

      <TabOrdered
        id={styles.tabOrdered}
        className={`${bellefair.className} flex md-mt-3-5 sm-mt-2`}
        items={["1", "2", "3"]}
        index={index}
        setIndex={setIndex}
      />

      <TechContent
        id={styles.techContent}
        className={`md-mt-2-75 sm-mt-1-5`}
        content={{ name: name, description: description }}
      />

      {/* next/image has not support art direction yet. */}
      <picture id={styles.heroImg} className="md-mt-3-75 sm-mt-2">
        <source srcSet={images.landscape} media="(max-width: 768px)" />
        <img src={images.portrait} alt={`Picture of ${name}`} />
      </picture>
    </div>
  );
};

const TechContent = ({ id, content, className }) => {
  return (
    <div id={id} className={className}>
      <div className={`${barlow_Condensed.className} fs200 ls2-7 uppercase`}>
        The terminology...
      </div>
      <h2
        className={`${bellefair.className} mt1 textNeutral100 fs700 fw400 uppercase`}
      >
        {content.name}
      </h2>
      <p className="mt1-5 sm-mt-1 lh1-78 w50ch">{content.description}</p>
    </div>
  );
};
