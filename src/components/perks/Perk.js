import React from 'react';
import PerkDescription from './PerkDescription';
import './styles/Perk.css';

export const Perk = ({ label, description, shortDescription }) => {
    return (
        <section className="perk">
            <h3>
                {label}
            </h3>
            <p>
                {shortDescription}
            </p>
            <PerkDescription description={description} />
        </section>
    )
};

export default Perk;