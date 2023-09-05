import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavLink.module.css";
import Image from "next/image";

const NavLink = ({ href, label, imageSrc, width, height }) => {
    const router = useRouter();
    const isActive = router.asPath.startsWith(href);

    return (
        <Link href={href}>
            <div
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
            >
                <Image
                    className={styles.image}
                    width={width}
                    height={height}
                    src={imageSrc}
                    alt="logo"
                />
                <p>{label}</p>
            </div>
        </Link>
    );
};

export default NavLink;
