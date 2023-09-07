import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Input from "../Input/Input";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Navbar/SideBar/SideBar";
import SearchModal from "../SearchModal/SearchModal";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const toggleSearchModal = () => {
        setIsSearchModalOpen(!isSearchModalOpen);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerSection}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={150}
                            height={160}
                        />
                    </Link>
                </div>
                <div className={styles.socialContainer}>
                    <div className={styles.headerTextSection}>
                        <p>
                            Play games at <span> monygame.com</span>
                            <br /> Every day you can find the newest and best
                            games on this website!
                        </p>
                        <Input />
                    </div>
                    <div className={styles.sideBarContainer}>
                        <div className={styles.sideBarButtons}>
                            <Image
                                src="/menu.png"
                                alt="Menu"
                                width={30}
                                height={30}
                                onClick={toggleSidebar}
                            />
                            <Image
                                src="/search.png"
                                alt="Search"
                                width={30}
                                height={30}
                                onClick={toggleSearchModal}
                            />
                        </div>
                        {isSearchModalOpen && (
                            <SearchModal
                                toggleSearchModal={toggleSearchModal}
                                isSearchModalOpen={isSearchModalOpen}
                            />
                        )}
                        {isSidebarOpen && (
                            <Sidebar
                                toggleSidebar={toggleSidebar}
                                isOpen={isSidebarOpen}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.navbarContainer}>
                <Navbar />
            </div>
        </div>
    );
};

export default Header;
