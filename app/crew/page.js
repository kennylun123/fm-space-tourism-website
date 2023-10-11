"use client";

import Image from "next/image";
import Header from "../components/Header";
import styles from "./page.module.css";
import { barlow_Condensed, bellefair } from "../fonts";
import { TabUnordered } from "../components/Tab";
import { useState } from "react";

import data from "public/json/data.json";

export default function Crew() {
  const [index, setIndex] = useState(0);
  const { crew } = data;

  return (
    <main className={styles.main}>
      <Header />
      <Content crewData={crew} index={index} setIndex={setIndex} />
    </main>
  );
}

const Content = ({ crewData, index, setIndex }) => {
  const { name, images, role, bio } = crewData[index];

  return (
    <div className={`grid gridContainer ${styles.containerCrew}`}>
      <h1
        id={styles.title}
        className={`${barlow_Condensed.className} textNeutral100 fs500 fw400 ls4-725 mt4-75 uppercase`}
      >
        <span className={`fw700 op-25 mr1-75`}>02</span>
        Meet Your Crew
      </h1>

      <CrewContent
        id={styles.crewContent}
        content={{
          name: name,
          role: role,
          bio: bio,
          setIndex: setIndex,
        }}
      />

      <TabUnordered
        id={styles.tabUnordered}
        className={`flex mb-4`}
        items={[
          crewData[0].name,
          crewData[1].name,
          crewData[2].name,
          crewData[3].name,
        ]}
        index={index}
        setIndex={setIndex}
      />

      <div id={styles.heroImgWrapper}>
        <Image
          src={images.webp}
          fill
          alt={`Picture of ${name}`}
          className={`pt4-75`}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

const CrewContent = ({ id, content }) => {
  return (
    <div id={id}>
      <h2
        className={`${bellefair.className} textNeutral100 fs700 fw400 uppercase`}
      >
        <div className={`op-5 fs600 mb-5`}>{content.role}</div>
        {content.name}
      </h2>
      <p className="mt1-5 lh1-78 w50ch">{content.bio}</p>
    </div>
  );
};
