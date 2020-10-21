export default {
    strength: {
        label: 'S is for Strength',
        melee: {
            label: 'Melee',
            tier1: [
                {
                    label: 'Slugger',
                    shortDescription: '+1 die on 2-handed melee attacks.',
                    description: 'Others may prefer finesse, but nothing can top one solid swing of a Super Sledge. When attacking with a 2-handed melee weapon, or when wielding a versatile melee weapon with 2 hands, roll 1 additional die.',
                },
                {
                    label: 'Gladiator',
                    shortDescription: '+1 die on 1-handed melee attacks.',
                    description: 'Face down your opponents with your instruments of death. When you are wielding a 1-handed melee weapon, or wielding a versatile melee weapon with 1 hand, roll 1 additional die.',
                },
            ],
            tier2: [
                {
                    label: 'Smackdown',
                    shortDescription: 'Spend a Luck point after blocking to knock prone.',
                    description: 'The bigger you are, the harder they fall. After successfully blocking an attack, you may immediately spend a Luck point to knock your attacker prone.',
                },
                {
                    label: 'Home Run',
                    shortDescription: 'Spend 1 AP to add S to the damage of next attack.',
                    description: 'Swing for the moon, even if you miss someone will still be missing some teeth. You may spend 1 Action Point to add your Strength to the damage of your next successful Melee attack. This effect cannot be applied multiple times to the same attack.',
                },
            ],
            tier3: [
                {
                    label: 'Blocker',
                    shortDescription: '+4 DR when wielding a 2-handed melee weapon.',
                    description: 'No one wants to pick a fight with the guy with the biggest stick. When wielding a 2-handed melee weapon, your damage reduction is increased by 4.',
                },
                {
                    label: 'Pain Train',
                    shortDescription: 'Make a 0 AP melee attack after moving.',
                    description: 'Your freight is pure hurt and you always deliver on time. If you take the Move action, you may immediately make a melee attack costing 0 Action Points.'
                },
            ],
        },
        utility: {
            label: 'Utility',
            tier1: [
                {
                    label: 'Athlete',
                    shortDescription: '+1 die when climbing, jumping or swimming.',
                    description: 'Your body is a well-conditioned machine. Whenever you attempt a test to jump, swim, climb or perform another athletic feat, you may roll 1 additional die, even if you do not make this test with Strength.',
                },
                {
                    label: 'Blacksmith',
                    shortDescription: '+1 die to repair armor or melee weapons.',
                    description: 'It’s all about how you hammer the anvil. With this perk, roll 1 additional die on any test to repair armor or melee weapons. This perk is also a prerequisite for some armor and melee weapon recipes.',
                },
            ],
            tier2: [
                {
                    label: 'Bear Arms',
                    shortDescription: '-2 ENB to Heavy Weapons',
                    description: 'Keep curling those missiles so you can carry more miniguns. All Heavy Weapons have their Encumbrance value reduced by 2 to a minimum of 1.',
                },
                {
                    label: 'Sturdy Frame',
                    shortDescription: '-2 ENB to Armor',
                    description: 'Don’t just wear your armor: flaunt it! Armor you are carrying or wearing has its Encumbrance value decreased by 2. Encumbrance can never be less than 1.',
                },
            ],
            tier3: [
                {
                    label: 'Pack Rat',
                    shortDescription: 'Booze, chems and aid have 0 ENB',
                    description: 'You’re pretty sure all the extra stuff you carry around will come in handy someday! Any booze, chems or aid items you are carrying have an ENB value of 0.'
                },
                {
                    label: 'Strong Back',
                    shortDescription: '+6 ENB Limit',
                    description: 'Built like a brahmin. Your Encumbrance Limit is permanently increased by 6.',
                }
            ],
        },
        heavyWeapons: {
            label: 'Heavy Weapons',
            tier1: [
                {
                    label: 'Lock and Load',
                    shortDescription: '-1 AP to reload heavy weapons',
                    description: 'Your big guns practically reload themselves! Reloading any heavy weapon costs 1 fewer Action Points.',
                },
                {
                    label: 'Heavy Gunner',
                    shortDescription: '+1 die to heavy weapon attacks',
                    description: 'Miniguns bring you comfort. A Flamer is your best friend. There’s nothing like the thrill of a Fat Man in your arms. Whenever you make an attack with a Heavy Weapon, you roll 1 additional die.',
                },
            ],
            tier2: [
                {
                    label: 'Basher',
                    shortDescription: 'Melee attacks with heavy weapons deal 6+S DAM',
                    description: 'Those spikes on the end of your missile launcher aren’t just a fashion statement. When you make a melee attack while wielding a heavy weapon, you deal damage equal to 6 + your Strength.',
                },
                {
                    label: 'Fixed Position',
                    shortDescription: '+5 DAM from heavy weapons when you don\'t move',
                    description: 'You are a bastion of hellfire on the battlefield: mowing down your enemies from on high. If you did not move this turn, you may add 5 points to any damage dealt with a heavy weapon.',
                },
            ],
            tier3: [
                {
                    label: 'Bullet Shield',
                    shortDescription: 'Wielding a heavy weapon grants +4 DR',
                    description: 'How do you stop enemies from shooting you? By shooting more bullets back! If you are wielding a heavy weapon then you increase your Damage Reduction by 4.',
                },
                {
                    label: 'Covering Fire',
                    shortDescription: 'CA against targets you miss with heavy weapons',
                    description: 'Laying down a tactical blanket of bullets or a fearful barrage of explosions can open up many opportunities. When you miss a target with a heavy weapon attack, or targets successfully avoid an Area attack from your heavy weapon, those targets grant Combat Advantage to your allies until the end of your next turn.',
                },
            ],
        },
    },
    perception: {
        label: 'P is for Perception',
        senses: {
            label: 'Senses',
            tier1: [{
                label: 'Survivalist',
                shortDescription: '+1 die to detect poisons & poison immunity',
                description: 'Those who don’t know their way around the wastes are consumed by them but you always can pick out the distinct smell of something that might kill you. You roll 1 additional die when attempting to detect poisons and you cannot be affected by the poisoned condition.',
            },{
                label: 'Eyes & Ears',
                shortDescription: '+1 die to detect hidden foes or traps',
                description: 'Being caught unaware is a quick way to a nasty end, and you don’t intend to die like that. When performing a Perception test to detect hidden creatures, traps, or hazards, you may roll 1 additional die.',
            }],
            tier2: [{
                label: 'Self Awareness',
                shortDescription: 'Roll P for stealth',
                description: 'Sometimes a deep breath and a good sense of your surroundings are all you need to stay hidden. Rather than relying on light feet, you may roll Perception when attempting to be stealthy.',
            },{
                label: 'Cat Eyes',
                shortDescription: 'See in the dark',
                description: 'You can see in the dark. Is it creepy? Maybe. But the people who think so won’t see you coming.',
            }],
        },
    },
};