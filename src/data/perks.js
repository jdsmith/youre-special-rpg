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
                description: 'Luck doesn’t just favor you, it favors anyone who lays eyes on you. You may spend your luck points on other Survivors’ rolls as if they were your own.',
            },{
                label: 'Friendly Fire',
                shortDescription: 'Survivors in AoE take less damage',
                description: 'Even when the bullets are flying, you keep a sharp eye out for your friends. When other Survivors are caught in your area attack, they take only half damage if they fail their dodge roll or choose not to dodge. If they succeed on their dodge roll then they take no damage.',
            }],
            tier2: [{
                label: 'Bodyguards',
                shortDescription: '+1 DR for each Survivor within close range',
                description: 'Keep your friends close. Preferably between you and your enemies. You gain 1 Damage Reduction for each Survivor within close range of you.',
            },{
                label: 'Bedside Manner',
                shortDescription: 'Add C to HP gained from first-aid',
                description: 'Caring for patients is more than just needles and bandages. You understand the importance of treating your patients like people. When performing first-aid, on another or on yourself, you add your Charisma score to the number of hit points gained.',
            }],
            tier3: [{
                label: 'Arresting Gaze',
                shortDescription: 'C vs. I to gain CA',
                description: 'Once you lock eyes with your enemy, you don’t let them look away. On your turn, you may spend an Action Point to attempt to put an enemy at a disadvantage. Make a Charisma test contested by the target’s Intelligence. If you succeed, then all Survivors have Combat Advantage against the target until the end of the encounter.',
            },{
                label: 'Powerful Presence',
                shortDescription: 'C(2) to reduce attacks against target by 1',
                description: 'You are so captivating that sometimes enemies have a hard time focusing on anyone but you. On your turn, you may spend 1 Action Point to attempt to distract your enemies from a single ally. Make an Easy (2) Charisma test. If you succeed, all enemies must roll 1 fewer dice on all attacks made against an ally of your choice for the remainder of the encounter. This effect cannot benefit the same ally multiple times during the encounter.',
            }]
        },{
            label: 'Socialize',
            tier1: [{
                label: 'Bargain Hunter',
                shortDescription: 'Roll C; Reduce price by 10x successes',
                description: 'A shrewd tongue might be all you need to take that shiny new laser rifle in the window home with you. When interacting with a shopkeeper, you may make a Charisma test, and multiply the number of successes by 10. The price of an item is reduced by the result, but can only be reduced to below half of its normal price.',
            },{
                label: 'Party Animal',
                shortDescription: 'Cannot be addicted to alcohol',
                description: 'Chug, chug, chug! Your liver is either very well-trained, or no longer functioning. Either way you cannot be addicted to alcohol.',
            }],
            tier2: [{
                label: 'Lady Killer',
                shortDescription: '+1 die to persuade females, +1 die to attack males',
                description: 'You croon and the ladies swoon. But the men don’t take it too kindly. You may roll 1 additional die when making Charisma tests against women, and you may roll 1 additional die when attacking men. This perk only applies to humanoids of a determinate gender.',
            },{
                label: 'Black Widow',
                shortDescription: '+1 die to persuade males, +1 die to attack females',
                description: 'Your intricate webs of intrigue are perfect for snaring men and rebuking women. When you make a Charisma test against a male, you may roll 1 additional die. You also may roll 1 additional die when attacking females. This perk only applies to humanoids of a determinate gender.',
            }],
            tier3: [{
                label: 'Happy Go Lucky',
                shortDescription: 'Gain 2 L when drinking alcohol',
                description: 'Things just seem to go your way when you’ve had a brew or two. While under the effects of Alcohol, you gain 2 Luck in addition to the other benefits of the beverage.',
            },{
                label: 'Misunderstanding',
                shortDescription: 'One free re-roll when lying',
                description: 'When you get caught in a lie, just keep backpedaling. Eventually you will find another lie that works. Once per session, you may reroll any failed dice on a Charisma test without spending a Luck point. If you wish to continue rerolling after the new result, then you must spend Luck points as normal.',
            }],
        },{
            label: 'Debate',
            tier1: [{
                label: 'Animal Friend',
                shortDescription: 'C vs. I to pacify an Animal',
                description: 'The beasts of the wasteland just seem to get you. On your turn, you may spend an Action Point to attempt to pacify an animal. Perform a Charisma test contested by the animal’s Intelligence. If you succeed, the animal may not attack until the beginning of your next turn. The pacification ends if the animal suffers damage before the round is over.',
            },{
                label: 'Soloist',
                shortDescription: '+1 to melee attacks when alone',
                description: 'You do your best work alone. When you are engaged in melee with an opponent, and there are no Survivors also within melee range of that opponent, you may add 1 additional die to all attack, block, and dodge rolls.',
            }],
            tier2: [{
                label: 'Wasteland Whisperer',
                shortDescription: 'C vs. I to pacify Monstrosities',
                description: 'Your powers of persuasion have moved beyond simple animals. On your turn, you may spend 1 Action Point to attempt to pacify a monstrosity. Monstrosities are creatures that are too intelligent or abhorrent to be considered animals, and are classified as such in the Overseer’s Manual. They include but are not limited to Deathclaws, Radscorpions, Mirelurks, Feral Ghouls and Super Mutants. Perform a Charisma test contested by the monstrosity’s Intelligence. If you succeed, the monstrosity may not take the attack action until the beginning of your next turn. The pacification ends if the monstrosity suffers damage before the round is over.',
            },{
                label: 'Sticks and Stones',
                shortDescription: 'Roll C to dodge',
                description: 'Your mama said that mouth would get you into trouble, but it also seems to get you out of it. When rolling to dodge an attack, you may roll Charisma instead of Agility.',
            }],
            tier3: [{
                label: 'Intimidation',
                shortDescription: 'C vs. I to pacify Humanoids',
                description: 'You’ve practiced on animals. You’ve practiced on monstrosities. Now it’s time to take your pacifist tactics to the next level. On your turn, you may spend 1 Action Point to attempt to pacify a humanoid. Perform a Charisma test contested by the humanoid’s Intelligence. If you succeed, the humanoid may not take the attack action until the beginning of your next turn. The pacification ends if the humanoid suffers damage before the round is over.',
            },{
                label: 'Sharing is Caring',
                shortDescription: 'Redirect 1/2 DAM taken to an ally in melee',
                description: 'Let’s face it. You are important. So important that your friends will gladly take bullets for you. When you suffer damage, you may choose to take only half of the damage and apply the other half to an ally within melee range.'
            }],
        }],
    },
    intelligence: {
        label: 'I is for Intelligence',
        trees: [{
            label: 'Engineering',
            tier1: [{
                label: 'Hacker',
                shortDescription: '+1 die to hack terminals',
                description: 'Spending all that time alone modding old holotape games has paid off. When attempting to hack a terminal or bypass electronic security, you may roll 1 additional die.',
            },{
                label: 'Gun Nut',
                shortDescription: '+1 die to repair ranged weapons',
                description: 'You have a sixth sense for firearms. When performing a test to repair or craft a ranged weapon, you may roll 1 additional die. This perk is also a prerequisite for certain mods and recipes.',
            }],
            tier2: [{
                label: 'Chemist',
                shortDesctiption: '+1 I when using chems',
                description: 'Sometimes a hobby… or habit… becomes a really useful skill. Your time spent mixing chemicals has opened up something special within you. All chems you take now increase your Intelligence by 1 in addition to any other beneficial effects. This perk is also a prerequisite for some recipes.',
            },{
                label: 'Scrapper',
                shortDescription: 'Recover 1 junk from crafted items',
                description: 'You believe that taking things apart can require just as much finesse as putting them together. You may use a workbench to dismantle any piece of gear that has a recipe to recover an amount of scrap equal to the amount of scrap it took to build it minus 1. This does not include special components. For example, a Nuka Grenade requires a Nuka Cola and 2 scrap to create. Destroying a Nuka Grenade produces 1 scrap.',
            }],
            tier3: [{
                label: 'Complete Restoration',
                shortDescription: 'Bonus repair successes grant temporary condition segments',
                description: '',
            }, {
                label: 'Waste Not, Want Not',
                shortDescription: 'Recover 1 special component from crafted items',
                description: 'You’re nothing if not frugal with your components. When using a workbench to dismantle a piece of gear, you may recover one special component from the recipe in addition to any junk recovered. With this perk, dismantling a Nuka Grenade would yield a cool, refreshing Nuka Cola. If a recipe has no special components, this perk has no effect.',
            }],
        },{
            label: 'Battlefield Tactics',
            tier1: [{
                label: 'Robotics Expert',
                shortDescription: '+1 die to attack Robots or Power Armor',
                description: 'Fancier tech just means it’s easier to break, if you know where to shoot. When performing an attack against a Robot or an enemy in Power Armor, you may roll 1 additional die.',
            },{
                label: 'Demolition Expert',
                shortDescription: 'Add I to DAM from Area Attacks',
                description: 'You have a knack for creating explosives that pack the most punch, and delivering them in an especially devastating way. When you deal damage with an Area weapon, you add your Intelligence score to the amount of damage dealt.',
            }],
            tier2: [{
                label: 'Medic',
                shortDescription: '+1 die to perform first-aid or surgery',
                description: 'You’ve plugged enough bullet holes and amputated enough limbs to know what you are doing. When performing first-aid or intensive care, you may roll 1 additional die.',
            },{
                label: 'Calculated Trajectory',
                shortDescription: 'Roll I for ranged and thrown attacks',
                description: 'Air resistance, target movement, the Coriolis effect: all these calculations race through your mind at lightning speed whenever you pull the trigger. When attacking with ranged or thrown weapons, you may use Intelligence instead of the weapon’s attack attribute.'
            }],
            tier3: [{
                label: 'Anatomy 101',
                shortDescription: 'Add I to HP gained from first-aid',
                description: 'It’s amazing how much a basic understanding of the human body improves your ability to heal it. When performing first-aid on yourself or on others, you add your Intelligence score to the amount of Hit Points gained.',
            },{
                label: 'Nerd Rage',
                shortDescription: 'Gain I DR for 2 AP',
                description: 'It’s all fun and games until the glasses come off. On your turn, you may spend 2 Action Points to add your Intelligence to your Damage Reduction until the beginning of your next turn.',
            }],
        },{
            label: 'Academia',
            tier1: [{
                label: 'Historian',
                shortDescription: '+1 die to recall lore',
                description: 'People say that what happened before doesn’t matter. You don’t believe that’s true. When making an Intelligence test to recall lore or facts, you may roll 1 additional die.',
            },{
                label: 'Theoretical Physics',
                shortDescription: 'Roll I for feats of athletics',
                description: 'Why train when you can use your brain? It’s all in the technique. When performing feats of athletics such as swimming, jumping, or climbing, you may roll Intelligence instead of Strength.',
            }],
            tier2: [{
                label: 'Swift Learner',
                shortDescription: 'Perks cost 2 XP, SPECIAL advances cost 1 less XP',
                description: 'First place. Top of the Class. Valedictorian. That’s you. You increase a SPECIAL attribute when the number of failures for that attribute equals your current value instead of exceeds it, and all perks cost 2 XP instead of 3.',
            },{
                label: 'Know-It-All',
                shortDescription: 'Roll I instead of C for persuasion',
                description: 'It’s hard to argue with facts, despite how much some might try. When attempting to persuade someone honestly, you may roll Intelligence instead of Charisma.',
            }],
            tier3: [{
                label: 'No Such Thing',
                shortDescription: 'I determines Luck Points',
                description: 'Luck is just a superstition. You don’t have time for such nonsense. At the beginning of each session, you gain a number of Luck points equal to your Intelligence score, instead of your Luck score.',
            },{
                label: 'Night Classes',
                shortDescription: '+1 die to I tests between 6 p.m. and 6 a.m.',
                description: 'Some things just seem clearer under the light of the moon and stars. Whenever you make an Intelligence test between the hours of 6 p.m. and 6 a.m. you may roll 1 additional die.',
            }],
        }],
    },
    agility: {
        label: 'A is for Agility',
        trees: [{
            label: 'Cowboy',
            tier1: [{
                label: 'Freeloader',
                shortDescription: '-1 AP to reload firearms',
                description: 'You’re a well-oiled machine when it comes to dumping the clip and slapping in another. It takes 1 fewer Action Point to reload any weapon not classified as a Heavy Weapon.',
            },{
                label: 'Commando',
                shortDescription: '+1 die on Autofire attacks',
                description: 'It’s all about grouping. When performing an autofire attack, you may roll 1 additional die.',
            }],
            tier2: [{
                label: 'Gunslinger',
                shortDescription: '+1 die on pistol attacks',
                description: 'Some say bigger is better, but you know that size doesn’t matter. It’s how you use it. When attacking with a Pistol, you may roll 1 additional die.',
            },{
                label: 'Shotgunner',
                shortDescription: '+1 die on shotgun attacks',
                description: 'Double-barrel, pump, semi-automatic: What else is there in life? When attacking with shotguns you may roll 1 additional die.',
            }],
            tier3: [{
                label: 'Gun Fu',
                shortDescription: '+1 die when attacking multiple targets',
                description: 'One bullet per target: that’s efficiency. The cost to aim when making a V.A.T.S. attack is reduced by 1 AP.',
            },{
                label: 'Shocker',
                shortDescription: '2x DAM for 2 rounds of ammo',
                description: 'You can unload both barrels, or fan the hammer, but however you do it the result is more carnage. When attacking with a revolver, double-barreled shotgun, or sawed-off shotgun, you can choose to expend 2 rounds of ammunition in 1 attack to deal double damage.',
            }],
        },{
            label: 'Martial Arts',
            tier1: [{
                label: 'Sweep the Leg',
                shortDescription: 'Spend 1 L to knock opponent prone after dodging',
                description: 'A tactical feint might just lead to your opponent finding himself on his back. After successfully dodging an attack, you may immediately spend a Luck point to knock your opponent prone.',
            },{
                label: 'Fancy Footwork',
                shortDescription: '+1 die on attacks while moving',
                description: 'No need to take your time when you can move quickly and shoot from the hip. If you make an attack in the same turn that you took a move action, you may roll 1 additional die on the attack roll.',
            }],
            tier2: [{
                label: 'Dual Wielder',
                shortDescription: 'Make 1 off-hand attack for 0 AP',
                description: 'Double the weapons means double the victims. When wielding a weapon in each hand, you may make an attack with the off-hand weapon for 0 Action Points once per turn.',
            },{
                label: 'Finesse',
                shortDescription: 'Add A to melee DAM',
                description: 'A cut doesn’t need to be particularly deep as long as it is well placed. You may add your Agility instead of Strength to melee damage.',
            }],
            tier3: [{
                label: 'Dead Man Sprinting',
                shortDescription: 'Roll A to Cheat Death',
                description: 'The Grim Reaper won’t claim you if he can’t catch you. When you have dropped to 0 hit points and are dying, you may roll Agility instead of Endurance to Cheat Death.',
            },{
                label: 'Defensive Dualist',
                shortDescription: '+4 DR while dual-wielding',
                description: 'You wreathe yourself in a flurry of blades so completely that even bullets can’t get through. When wielding a melee weapon in each hand, you increase your Damage Reduction by 4.',
            }]
        },{
            label: 'Movement',
            tier1: [{
                label: 'Light-Footed',
                shortDescription: 'Never trigger floor-based traps',
                description: 'You don’t need to disable traps if you can avoid them. With this perk, you never trigger a floor-based trap, such as one triggered by a pressure plate or trip wire. You do not need to be aware of the trap to avoid it, but if you avoid traps that you don’t know are there then the Overseer won’t reveal them to you or your fellow Survivors without a more discerning look.',
            },{
                label: 'Sneak',
                shortDescription: '+1 die for sneaking',
                description: 'Light with your fingers, but lighter on your feet. When moving silently, hiding, or generally trying to avoid detection, you may roll 1 additional die.',
            }],
            tier2: [{
                label: 'Shifty',
                shortDescription: '0 AP dodge once per encounter',
                description: 'Dodge, duck, dip, dive and dodge! Once per encounter, you may take the Dodge action for 0 Action Points.',
            },{
                label: 'Acrobatic',
                shortDescription: 'Roll A for athletics',
                description: 'You achieve most athletic feats with finesse as opposed to brute force. When jumping, climbing, or swimming you may roll Agility instead of Strength.',
            }],
            tier3: [{
                label: 'Action Boy',
                shortDescription: 'Gain 1 AP',
                description: 'Somehow, you seem to accomplish so much more than everyone else. Each round, your number of Action Points is increased by 1. For most folks, this means you will get 4 Action Points instead of 3.',
            },{
                label: 'Evasive',
                shortDescription: 'Take 0 damage from Area attacks when dodging',
                description: 'You know how to get down when you really need to. When you are caught in an Area attack, you only take half damage if you fail to dodge the attack. If you successfully dodge the attack then you take no damage.',
            }],
        }],
    },
    luck: {
        label: 'L is for Luck',
        trees: [{
            label: 'Resourceful',
            tier1: [{
                label: 'Fortune Finder',
                shortDescription: 'Spend 1 Luck Point to gain 20x L successes',
                description: '',
            },{
                label: 'Lucky Break',
                shortDescription: 'Spend 1 Luck Point to prevent condition damage',
                description: '',
            }],
            tier2: [{
                label: 'Junk Shield',
                shortDescription: 'Gain up to 6 DR per junk carried',
                description: '',
            },{
                label: 'Nuka Fiend',
                shortDescription: 'Nuka Cola grants +1 L',
                description: '',
            }],
            tier3: [{
                label: 'Super Duper',
                shortDescription: 'Spend 1 Luck Point to craft 2 of an item',
                description: '',
            },{
                label: 'Dry Nurse',
                shortDescription: 'Spend 1 Luck Point to use a stimpak without consuming it',
                description: '',
            }]
        },{
            label: 'Vengeful',
            tier1: [{
                label: 'Just a Flesh Wound',
                shortDescription: 'Spend 1 Luck Point to avoid a Crit',
                description: '',
            },{
                label: 'Bloody Mess',
                shortDescription: 'Spend 1 Luck Point to add L to DAM',
                description: ''
            }],
            tier2: [{
                label: 'Ricochet',
                shortDescription: 'Spend 1 Luck Point to direct DAM dodged to an opponent',
                description: '',
            },{
                label: 'Critical Hit',
                shortDescription: '-2 AP for VATS once per encounter',
                description: '',
            }],
            tier3: [{
                label: 'Grim Reaper\'s Sprint',
                shortDescription: 'Gain 1 AP after killing an opponent',
                description: '',
            },{
                label: 'Mysterious Stranger',
                shortDescription: 'Spend 1 Luck Point to summon the Mysterious Stranger',
                description: '',
            }],
        },{
            label: 'Skillful',
        }],
    },
};