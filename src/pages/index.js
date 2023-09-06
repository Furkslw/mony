import React from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import HomeGrid from "@/components/HomeGrid/HomeGrid";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export default function Home() {
    return (
        <>
            <Head>
                <title>Mony Game</title>
                <meta
                    name=" Play games at monygame.com
                             Every day you can find the newest and best
                            games on this website!"
                    content="Mony"
                />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Header />
            <HomeGrid />
        </>
    );
}
