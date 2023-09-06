import React from "react";
import styles from "./Input.module.css";
import Link from "next/link";
import { useState } from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSearchClick = () => {
        console.log("Arama gerçekleştirildi");
    };

    return (
        <div className={styles.search}>
            <input
                type="text"
                className={styles.searchInput}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
            {!inputValue && <div className={styles.placeholder}>Search</div>}
            <Link href={"searchscreen"}>
                <img
                    src="/search.png"
                    alt="search"
                    onClick={handleSearchClick}
                />
            </Link>
        </div>
    );
};

export default Input;
