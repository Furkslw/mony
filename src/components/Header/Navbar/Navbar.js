import React from "react";
import styles from "./Navbar.module.css";
import NavLink from "./NavLink/NavLink";
import { categories } from "../../../data/mockData";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {categories.map((category, index) => (
                        <li className={styles.navItem} key={index}>
                            {category.name === "home" ? (
                                <NavLink href="/" label={category.label} />
                            ) : (
                                <NavLink
                                    href={`/category/${category.name}`}
                                    label={category.label}
                                    imageSrc={category.imageSrc}
                                    width={category.width}
                                    height={category.height}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
