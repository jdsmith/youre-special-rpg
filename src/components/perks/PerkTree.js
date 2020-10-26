import React from 'react';
import PerkTier from './PerkTier';

export const PerkTree = ({ tree }) => {
    const { label, tier1, tier2, tier3 } = tree;
    return (
        <section>
            <h2>{label}</h2>
            <hr />
            <PerkTier tier={tier1} />
            <hr />
            <PerkTier tier={tier2} />
            <hr />
            <PerkTier tier={tier3} />
        </section>
    )
}