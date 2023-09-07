import React from "react";
import { useRouter } from "next/router";
import { games } from "@/data/mockData";
import Header from "@/components/Header/Header";
import GameGrid from "@/components/GameGrid/GameGrid";
import GamePlaySection from "@/components/GamePlaySection/GamePlaySection";
import styles from "./gameSlug.module.css";

const GameScreen = () => {
    const router = useRouter();
    const { gameSlug } = router.query;

    const game = games.find((game) => game.slug === gameSlug);

    if (!gameSlug) {
        return null;
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.gameGrid}>
                    <div className={styles.gamePlaySection}>
                        <GamePlaySection game={game} />
                    </div>
                </div>
                <div className={styles.gridSection}>
                    {games.map((game) => (
                        <GameGrid key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default GameScreen;
