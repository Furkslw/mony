import React from "react";
import Header from "@/components/Header/Header";
import styles from "../styles/404.module.css";
import GameGrid from "@/components/GameGrid/GameGrid";
import { games } from "@/data/mockData";

export default function Custom404() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.mainContent}>
                        <div className={styles.notFound}>
                            <img
                                src="/notfound.png"
                                alt="404"
                                className={styles.notFoundImage}
                            />
                        </div>
                        <h2>Games You May Like </h2>
                        <div className={styles.grid}>
                            {games.map((game) => (
                                <GameGrid key={game.id} game={game} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
