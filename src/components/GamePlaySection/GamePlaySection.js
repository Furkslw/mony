import React from "react";
import Image from "next/image";
import styles from "./GamePlaySection.module.css";
import { games } from "@/data/mockData";
import GameGrid from "@/components/GameGrid/GameGrid";

const GamePlaySection = ({ game }) => {
    const categoriesTitle = game.category
        .map((category) => category)
        .join(" , ");

    return (
        <div className={styles.gamePlaySectionGrid}>
            <meta name="tags" content={game.description} />
            <meta property="og:title" content={game.title} />
            <div className={styles.gamePlaySectionTitleGrid}>
                <div className={styles.gamePlaySectionTitle}>
                    <Image src={game.imageSrc} width={80} height={80} />
                    <div className={styles.gamePlaySectionTitleText}>
                        <h1>{game.title}</h1>
                        <h2>{categoriesTitle}</h2>
                    </div>
                </div>
            </div>
            <div className={styles.gamePlaySectionGame}>
                <iframe
                    width="100%"
                    height="100%"
                    src={game.iframeUrl}
                    title={game.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={styles.gamePlaySectionDescription}>
                <p>{game.description}</p>
            </div>
        </div>
    );
};

export default GamePlaySection;
