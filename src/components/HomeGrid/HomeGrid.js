import React from "react";
import { games, categories } from "../../data/mockData";
import styles from "./HomeGrid.module.css";
import GameLink from "@/components/GameGrid/GameGrid";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

const HomeGrid = () => {
    return (
        <>
            <div className={styles.homeGridContainer}>
                {games.map((game) => (
                    <GameLink key={game.slug} game={game} />
                ))}
                <div className={styles.categorySection}>
                    <div className={styles.categorygrid}>
                        {categories.map((category) => (
                            <CategoryCard
                                key={category.name}
                                category={category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeGrid;
