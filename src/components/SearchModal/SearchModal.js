import React, { useState, useEffect } from "react";
import styles from "./SearchModal.module.css";
import GameGrid from "../GameGrid/GameGrid"; // GameGrid bileşenini ekledik
import { games } from "../../data/mockData";
const SearchModal = ({ isSearchModalOpen, toggleSearchModal }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showDefaultGames, setShowDefaultGames] = useState(true); // Varsayılan oyunları göstermek için bir durum

    const performSearch = () => {
        const filteredGames = games.filter((game) =>
            game.slug.includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredGames);
    };

    useEffect(() => {
        if (searchTerm === "") {
            // Eğer searchTerm boşsa, arama sonuçlarını sıfırla
            setSearchResults([]);
            setShowDefaultGames(true); // Varsayılan oyunları göster
        } else {
            performSearch(); // Her searchTerm değiştiğinde arama yap
            setShowDefaultGames(false); // Arama sonuçları varsa varsayılan oyunları gizle
        }
    }, [searchTerm]);

    // games verilerini burada ayarlayın (18 oyun)

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button
                    className={styles.closeButton}
                    onClick={toggleSearchModal}
                >
                    X
                </button>
                <h1 className={styles.title}>Search</h1>
                <div className={styles.searchBar}>
                    <input
                        placeholder="Search games by name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.results}>
                    {searchResults.length > 0 ? (
                        <>
                            <h2 className={styles.resultsTitle}>
                                Search results
                            </h2>
                            <div className={styles.resultGrid}>
                                {searchResults
                                    .slice(0, 6)
                                    .map((result, index) => {
                                        return (
                                            <GameGrid
                                                key={index}
                                                game={result}
                                            />
                                        );
                                    })}
                            </div>
                        </>
                    ) : showDefaultGames ? (
                        <div className={styles.defaultGames}>
                            <h2 className={styles.resultsTitle}>
                                What are you playing today?
                            </h2>
                            <div className={styles.defaultGamesGrid}>
                                {games.slice(0, 18).map((game, index) => (
                                    <GameGrid key={index} game={game} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.noResults}>
                            <p>No results found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
