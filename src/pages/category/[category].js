import React from "react";
import { useRouter } from "next/router";
import styles from "./category.module.css";
import GameGrid from "@/components/GameGrid/GameGrid";
import { categories, games } from "@/data/mockData";
import Header from "@/components/Header/Header";

const Category = () => {
    const router = useRouter();
    const { category } = router.query;

    if (!category) {
        return null; // Eğer kategori yoksa veya yükleniyor ise, bir şey gösterme
    }

    const filteredGames = games.filter((game) =>
        game.category.includes(category)
    );

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.gridGameSection}>
                    <div className={styles.titleSection}>
                        <h1>{category} Games</h1>
                    </div>
                    {filteredGames.map((game) => (
                        <GameGrid key={game.slug} game={game} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Category;
