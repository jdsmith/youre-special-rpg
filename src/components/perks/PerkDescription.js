import React from 'react';
import './styles/PerkDescription.css';

export const PerkDescription = ({ description, isShowing }) => (
    <aside className={`perk-description ${isShowing && 'visible'}`}>
        {description}
    </aside>
);

export default PerkDescription;