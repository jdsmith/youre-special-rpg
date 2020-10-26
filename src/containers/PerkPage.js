import React from 'react';
import { useParams } from 'react-router-dom';
import { PerkTree } from '../components/perks/PerkTree';
import perks from '../data/perks';
import './styles/PerkPage.css';

export const PerkPage = () => {
    const { category } = useParams();
    const categoryPerks = perks[category];

    if (categoryPerks) {
        const { label, trees = [] } = categoryPerks;
        return (
            <main id="perkPage">
                <h1>{label}</h1>
                <div className={`perk-trees ${category}`}>
                {trees.map(tree =>(
                    <PerkTree tree={tree} />
                ))}
                </div>
            </main>
        );
    }
};

export default PerkPage;
