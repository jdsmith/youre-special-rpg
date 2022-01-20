import React from 'react';
import CoverArt from '../images/wasteland-survival-cover.png';
import SurvivorsPDF from "../files/You're _SPECIAL_WSG_v1.3.pdf";
import './styles/HomePage.css';

export const HomePage = () => (
    <main id="home">
        <h1>War... War Never Changes</h1>
        <h2>What is You&apos;re SPECIAL?</h2>
        <p>
            &quot;You&apos;re SPECIAL&quot; is a tabletop roleplaying game set in the post-apocalyptic world of the Fallout video game series. The rules and references presented here are meant to evoke the feeling of that universe as well as provide items, settings, characters and experiences that are steeped in Fallout lore.
        </p>
        <h2>Who is it for?</h2>
        <p>
            This game has been lovingly written for anyone who is a fan of the Fallout series, post-apocalyptia and roleplaying games. If you wish to create characters and experience new stories set in the Wasteland, then this game is for you. The goal is that this will feel like Fallout to the fans of the franchise.
        </p>
        <section className="download-container">
            <img src={CoverArt} alt="Wasteland Survival Guide Cover" height="200" />
            <h2>Get Started with the Wasteland Survival Guide</h2>
            <a className="download-button" href={SurvivorsPDF} download>
                Download
            </a>
        </section>
    </main>
);

export default HomePage;
