import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import React from "react";
import Dashboard from "@/app/post/dashboard";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Prototype für eine Abschlussarbeit an der Hochschule Bonn-Rhein-Sieg&nbsp;
                </p>

            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
            <div>
                <Link href='/post/dashboard'> Start den Prototypen -&gt;</Link>
            </div>

            <div className={styles.grid}>
                <a
                    href="https://objektkultur.de/"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        in Zusammenarbeit mit <span>-&gt;</span>
                    </h2>
                    <p>Objektkultur</p>
                </a>
                <a
                    href="https://www.h-brs.de/de"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Sponsor <span>-&gt;</span>
                    </h2>
                    <p></p>
                </a>
                <a
                    href="https://www.h-brs.de/de/inf/prof-dr-sascha-alda"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        erst Betreuer <span>-&gt;</span>
                    </h2>
                    <p>Prof. Dr. Sascha Alda</p>
                </a>
                <a
                    href="https://www.h-brs.de/de/inf/prof-dr-matthias-bertram"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        zweit Betreuer <span>-&gt;</span>
                    </h2>
                    <p>Prof. Dr. Matthias Bertram</p>
                </a>
            </div>
        </main>
    );
}
