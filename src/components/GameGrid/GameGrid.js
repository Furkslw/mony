import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./GameGrid.module.css";

const GameGrid = ({ game }) => {
    return (
        <div className={styles.gridItem}>
            <Link href={`/game/${game.slug}`}>
                <Image
                    src={game.imageSrc}
                    alt={game.title}
                    className={styles.gridImage}
                    width={200}
                    height={200}
                />
            </Link>
        </div>
    );
};

export default GameGrid;
