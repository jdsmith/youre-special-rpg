import React from 'react';
import CoverArt from '../images/wasteland-survival-cover.png';
import CharacterSheetImage from '../images/character_sheet.png';
import SurvivorsPDF from "../files/You're _SPECIAL_WSG_v1.3.pdf";
import CharacterSheetsPDF from "../files/youre_special_character_sheets.pdf";
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
        <section className="flex-gap center">
            <div className="download-container">
                <img src={CoverArt} alt="Wasteland Survival Guide Cover" height="200" />
                <h2>Wasteland Survival Guide</h2>
                <a className="download-button" href={SurvivorsPDF} download>
                    Download
                </a>
            </div>
            <div className="download-container">
                <img src={CharacterSheetImage} alt="Wasteland Survival Guide Cover" height="200" />
                <h2>Character Sheets</h2>
                <a className="download-button" href={CharacterSheetsPDF} download>
                    Download
                </a>
            </div>
        </section>
    </main>
);

export default HomePage;
