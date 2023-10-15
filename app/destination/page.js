"use client";

import Image from "next/image";
import { useState } from "react";

import Header from "../components/Header";
import { Tab } from "../components/Tab";
import { barlow_Condensed, bellefair } from "../fonts";
import styles from "./page.module.css";

import data from "public/json/data.json";

export default function Destination() {
  const { destinations } = data;
  const [index, setIndex] = useState(0);
  return (
    <main className={`${styles.main} grid`}>
      <Header />
      <Content
        destinationsData={destinations}
        index={index}
        setIndex={setIndex}
      />
    </main>
  );
}

const Content = ({ destinationsData, index, setIndex }) => {
  const { name, images, description, distance, travel } =
    destinationsData[index];

  return (
    <div className={`grid gridContainer ${styles.containerDestination}`}>
      <h1
        id={styles.title}
        className={`${barlow_Condensed.className} textNeutral100 fs500 fw400 ls4-725 mt4-75 md-mt-2-5 sm-mt-1-5 uppercase`}
      >
        <span className={`fw700 op-25 mr1-75 sm-mr-1`}>01</span>
        Pick Your Destination
      </h1>

      <Image
        src={images.webp}
        width="445"
        height="445"
        alt="Picture of the planet"
        id={styles.heroImg}
        className="md-mt-3-75 sm-mt-2 md-mb-3 sm-mb-1-5"
      />

      <Tab
        id={styles.tab}
        className={`${barlow_Condensed.className} flex`}
        items={[
          destinationsData[0].name,
          destinationsData[1].name,
          destinationsData[2].name,
          destinationsData[3].name,
        ]}
        index={index}
        setIndex={setIndex}
      />

      <DestinationContent
        id={styles.destinationContent}
        className={`${styles.containerDestinationContent} flex pt2-375 md-pt-2 sm-pt-1-25`}
        content={{
          name: name,
          description: description,
          distance: distance,
          travel: travel,
        }}
      />
    </div>
  );
};

const DestinationContent = ({ id, className, content }) => {
  return (
    <div id={id} className={className}>
      <h2 className={`${bellefair.className} textNeutral100 fs800 uppercase`}>
        {content.name}
      </h2>
      <p className={`lh1-78 w50ch md-mb-3 sm-mb-2`}>{content.description}</p>

      <div className={`${styles.destinationProps} flex pt1-75 sm-pt-2`}>
        <div>
          <h3
            className={`${barlow_Condensed.className} fs200 fw400 ls2-35 uppercase`}
          >
            Avg. Distance
          </h3>
          <p
            className={`${bellefair.className} mt-75 textNeutral100 fs550 fw400 uppercase`}
          >
            {content.distance}
          </p>
        </div>

        <div>
          <h3
            className={`${barlow_Condensed.className} fs200 fw400 ls2-35 uppercase`}
          >
            Est. Travel Time
          </h3>
          <p
            className={`${bellefair.className} mt-75 textNeutral100 fs550 fw400 uppercase`}
          >
            {content.travel}
          </p>
        </div>
      </div>
    </div>
  );
};
