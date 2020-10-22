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
        trees: [{
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
                label: 'Locksmith',
                shortDescription: 'Roll P when picking locks',
                description: 'Listen for those tumblers and feel those pins click into place. When you make a test to pick a lock, you may roll Perception instead of Agility.'
            }],
            tier3: [{
                label: 'Danger Sense',
                shortDescription: 'Roll P to dodge',
                description: 'You can’t explain that special tingle you get when you’re in trouble, but you know enough to get the hell out of the way when you feel it. When dodging an opponent’s attack, you may roll Perception instead of Agility.',
            },{
                label: 'Cat Eyes',
                shortDescription: 'See in the dark',
                description: 'You can see in the dark. Is it creepy? Maybe. But the people who think so won’t see you coming.',
            }],
        },
        {
            label: 'Marksman',
            tier1: [{
                label: 'Rifleman',
                shortDescription: '+1 die on rifle attacks',
                description: 'Accurate and dependable: rifles are your weapon of choice. When making an attack with a Rifle, roll 1 additional die.',
            },{
                label: 'Concentrated Fire',
                shortDescription: '+1 die on VATS attacks',
                description: 'You have an eagle-eye for shooting someone where it hurts. When performing a targeted attack using VATS, you may roll 1 additional die.',
            }],
            tier2: [{
                label: 'Sniper',
                shortDescription: '+1 die on Far and Extreme range attacks',
                description: 'Patience, focus, and keeping your distance. Those are the traits of a good sniper, and you possess all three. When making a ranged attack at far or extreme range, you may roll 1 additional die.',
            },{
                label: 'Nowhere to Hide',
                shortDescription: 'Unhindered by cover or concealment',
                description: 'Being able to pick the flies off of a Brahmin at 200 yards means that there aren’t many folks that can stay out of your crosshairs. Targets of your ranged attacks do not gain any benefit from cover or concealment.',
            }],
            tier3: [{
                label: 'Bullseye',
                shortDescription: 'Ignore 4 DR',
                description: 'If there is a weakness in your target’s armor, you’ll find it. After succeeding on a Perception test to make a ranged weapon attack, you ignore 4 points of your opponent’s Damage Reduction.'
            },{
                label: 'Dead-Eye',
                shortDescription: 'Target weapon in VATS',
                description: 'Sometimes it’s better to leave your opponent alive and disarmed. When making a targeted VATS attack, you can now target one of your opponent’s weapons as if you were targeting their arms. If you succeed, instead of dealing damage, your opponent immediately drops that weapon and the weapon is broken.'
            }],
        },
        {
            label: 'Precise Chaos',
            tier1: [{
                label: 'Controlled Burst',
                shortDescription: 'Roll P for autofire attacks',
                description: 'You have an eagle-eye for shooting someone where it hurts. When performing a targeted attack using VATS, you may roll 1 additional die.',
            },{
                label: 'Pitcher',
                shortDescription: 'Roll P for thrown attacks',
                description: 'Curve, slider, knuckleball: you can do it all! And striking someone out is more fun when the ball explodes. When performing an attack with a thrown weapon, you may roll Perception instead of the weapon’s attack ability.',
            }],
            tier2: [{
                label: 'High Ground',
                shortDescription: 'Always Crit with CA',
                description: 'You are a masterful tactician and know how to use your advantage in combat. When you deal damage to an opponent whom you have Combat Advantage against, you also cause a critical injury and may roll on the critical injury table at +1 even if you didn’t roll any bonus successes.',
            },{
                label: 'Grenadier',
                shortDescription: '+1 die on thrown attacks',
                description: 'It’s all in the wrist, and your technique is unparallelled. When attacking with a thrown weapon, you may roll 1 additional die.',
            }],
            tier3: [{
                label: 'Consistently Accurate',
                shortDescription: 'Exclude P targets from AoE attacks',
                description: 'It’s eerie and unbelievable how friends that are caught in your blast radius come out without a scratch. But they certainly aren’t complaining. When you make an area attack, you may choose a number of targets to exclude equal to your Perception.',
            },{
                label: 'Maximum Effect',
                shortDescription: 'Add P to Crit rolls',
                description: 'It’s easy to kick someone when he’s down. It takes talent, however, to know exactly where to kick, and exactly how hard. When you roll on the critical hit table, you may add your Perception to the roll.'
            }],
        }],
    },
    endurance: {
        label: 'E is for Endurance',
        trees: [{
            label: 'Survival',
            tier1: [{
                label: 'Lead Belly',
                shortDescription: 'No RADs or disease from food or water',
                description: 'Were those Fancy Lad snack cakes pulled out from under an atomic bomb? Doesn’t matter to you. You suffer no radiation damage from eating or drinking.',
            },{
                label: 'Handle Your High',
                shortDescription: '+1 die on addiction tests',
                description: 'Your body has been conditioned to take whatever substances you inject into it in stride. When you make an Endurance test to stave off addiction, you may roll 1 additional die.',
            }],
            tier2: [{
                label: 'Slow Metabolism',
                shortDescription: 'Roll E to avoid starvation',
                description: 'In the wasteland, you need to be able to live off of what you have. It’s rarely three square meals a day. When you go without food or water, you may perform an Endurance test to stave off the effects of starvation and thirst. The number of successes required is equal to the number of days you have gone without food or water, but you make one Endurance test to cover both.',
            },{
                label: 'Cannibal',
                shortDescription: 'Flesh satisfies hunger and thirst',
                description: 'Who cares where your meal comes from? Meat is meat, and it keeps you fed. Flesh and blood from humanoids can now be consumed to satisfy hunger and thirst. Without this perk, the side effects are too dire to make this source of food and drink viable. In addition, you cannot contract diseases from eating uncooked meat.',
            }],
            tier3: [{
                label: 'Aquaboy',
                shortDescription: 'No RADs from swimming & can breathe underwater',
                description: 'You feel just as at home in the water as out of it. You are capable of breathing while underwater and so you cannot drown. In addition, you do not suffer Radiation damage from coming in contact with irradiated water, but you can still take Radiation damage from drinking it.',
            },{
                label: 'Sleep it Off',
                shortDescription: 'Regain all HP after an extended rest',
                description: 'It’s barely a flesh wound; you’ll feel better in the morning. You regain all lost hit points during an extended rest instead of an amount equal to your Endurance score.',
            }],
        },{
            label: 'Defense',
            tier1: [{
                label: 'Step Off',
                shortDescription: 'Roll E to block',
                description: 'Why risk harm to your precious weapons when you could block attacks with your body? When you roll to block an attack, you may roll Endurance instead of Strength. In addition, you do not need to be wielding a weapon to block.',
            },{
                label: 'Rad Resistant',
                shortDescription: 'Gain E RAD resitance',
                description: 'After spending so much time in the wasteland, radiation is little more than a mild inconvenience. You gain Rad Resistance equal to your Endurance.',
            }],
            tier2: [{
                label: 'Just Like Grognak',
                shortDescription: 'Add E to DR when not wearing armor',
                description: 'Nothing can touch you when you fly into a battle rage! When you are not wearing any armor, you add your Endurance score to your Damage Reduction.',
            }, {
                label: 'Adamantium Skeleton',
                shortDescription: 'Limbs cannot be crit & heal after an extended rest',
                description: 'Someone’s been drinking their brahmin milk. Critical injuries that target your limbs have no effect. In addition, any crippled limbs heal themselves after an extended rest.',
            }],
            tier3: [{
                label: 'Absolute Unit',
                shortDescription: 'Spend 3 AP to gain 10 DR',
                description: 'You’re practically invincible when you stand your ground. On your turn, you may spend 3 Action Points to gain 10 Damage Reduction until the beginning of your next turn.',
            },{
                label: 'Thick Skull',
                shortDescription: 'Head cannot be injured',
                description: 'You may not have much room for a brain in there, but at least bullets won’t get through. Any attack that targets your head deals normal damage and does not gain the benefits of a headshot. In addition, if a head result is rolled on the Critical Hit table, it is ignored.',
            }],
        },{
            label: 'Wellness',
            tier1: [{
                label: 'Toughness',
                shortDescription: 'Gain 9 HP',
                description: 'The more health the better: plain and simple. You increase your maximum Hit Points by 9 when you take this perk.',
            },{
                label: 'Resilient',
                shortDescription: '+1 die to cheat death',
                description: 'Death keeps knocking, but he can’t come in. When you roll to cheat death you may roll 1 additional die.',
            }],
            tier2: [{
                label: 'Glowing One',
                shortDescription: 'Gain HP equal to 2x RADs suffered',
                description: 'Feeling a little ghoulish? You didn’t need all that skin anyway. Whenever you would suffer Radiation, you regain a number of Hit Points equal to the 2 times the number of RADs you suffered.',
            }, {
                label: 'True Grit',
                shortDescription: 'Add E to healing from first-aid',
                description: 'Your body is so used to being patched up, it practically heals on its own. When you receive First Aid, you may add your Endurance to the amount of HP healed.',
            }],
            tier3: [{
                label: 'Life Giver',
                shortDescription: 'Gain E when giving first-aid',
                description: 'You mysteriously feed off of the life energy of others. When you use a stimpak to heal another character, you heal a number of hit points equal to your Endurance.',
            },{
                label: 'Hearty Specimen',
                shortDescription: 'Add E to healing from stimpaks',
                description: 'Stimpaks are great, but your body likes to tack on a little extra healing. When you are healed with a stimpak, you increase the amount of hit points gained by your Endurance score. As usual, you can never heal beyond your Hit Point maximum.',
            }],
        }],
    },
    charisma: {
        label: 'C is for Charisma',
        trees: [{
            label: 'Reassure',
            tier1: [{
                label: 'Inspirational',
                shortDescription: 'Spend L on allies',
                description: '',
            },{
                label: 'Friendly Fire',
                shortDescription: 'Survivors in AoE take no damage',
                description: '',
            }],
            tier2: [{
                label: 'Bodyguards',
                shortDescription: '+1 DR for each Survivor within close range',
                description: '',
            },{
                label: 'Bedside Manner',
                shortDescription: 'Add C to HP gained from first-aid',
                description: '',
            }],
            tier3: [{
                label: 'Arresting Gaze',
                shortDescription: 'C vs. I to gain CA',
                description: '',
            },{
                label: 'Powerful Presence',
                shortDescription: 'C(2) to reduce attacks against target by 1',
                description: '',
            }]
        },{
            label: 'Socialize',
        },{
            label: 'Debate',
        }],
    },
};