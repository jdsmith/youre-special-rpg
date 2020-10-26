import React from 'react';
import Perk from './Perk';
import './styles/PerkTier.css';

export const PerkTier = ({ tier }) => (
    <div className="perk-tier">
        {tier.map(perk => (
            <Perk {...perk} />
        ))}
    </div>
);

export default PerkTier;