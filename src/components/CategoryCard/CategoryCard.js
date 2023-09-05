import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryCard.module.css";
import GameGrid from "@/components/GameGrid/GameGrid";
import { games } from "@/data/mockData";

const CategoryCard = ({ category }) => {
    // Sadece kategori adı "home" olmayan kategorileri ekleyeceğiz
    if (category.name !== "home") {
        return (
            <div className={styles.categoryCard}>
                <div className={styles.titleSection}>
                    <Image
                        src={category.imageSrc}
                        alt={category.label}
                        className={styles.icon}
                        width={category.width}
                        height={category.height}
                    />
                    <p>{category.label}</p>
                </div>
                <div className={styles.gridContainer}>
                    <div className={styles.gameGridItems}>
                        {games.map((game) => (
                            <GameGrid key={game.slug} game={game} />
                        ))}
                    </div>
                </div>
                <div className={styles.viewAllButton}>
                    <Link href={`/${category.name}`}>
                        <p>View All</p>
                        <img src="/viewtitlearrow.png" alt="arrow" />
                    </Link>
                </div>
            </div>
        );
    } else {
        // Kategori adı "home" ise bu kategori kartını görüntülemiyoruz
        return null;
    }
};

export default CategoryCard;
