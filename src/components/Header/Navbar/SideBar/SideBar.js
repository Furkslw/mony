import React from "react";
import styles from "./Sidebar.module.css";
import NavLink from "../NavLink/NavLink";
import { useRouter } from "next/router";
import { categories } from "../../../../data/mockData"; // mock datayı içe aktarın

const Sidebar = ({ toggleSidebar, isOpen }) => {
    const router = useRouter();

    return (
        <>
            {isOpen && (
                <div className={styles.overlay} onClick={toggleSidebar}></div>
            )}
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
                <div className={styles.sidebarHeader}>
                    <h1>Menu</h1>
                    <img
                        src="/cross.png"
                        alt="Close menu"
                        onClick={toggleSidebar}
                    />
                </div>
                <div className={styles.categorySection}>
                    <h2>Category</h2>
                </div>
                <ul>
                    {categories.map((category) => (
                        <li className={styles.navItem} key={category.name}>
                            {category.name === "home" ? (
                                <NavLink
                                    href="/"
                                    label={category.label}
                                    imageSrc={category.imageSrc}
                                    width={category.width}
                                    height={category.height}
                                />
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
            </div>
        </>
    );
};

export default Sidebar;
