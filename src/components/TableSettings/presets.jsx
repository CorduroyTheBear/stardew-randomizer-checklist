export const Presets = 
{
    default:
        {
            settings:
            {
                arcade: "fullShuffling",
                backpack: "12",
                bookSanity: "powerSkill",
                buildingProgression: "progressive",
                bundles: "withJoja", // Change only if Vanilla
                cooksanity: "none",
                craftsanity: "none",
                cropsanity: "enabled",
                elevatorProgression: "progressive",
                festivalLocations: "easy",  
                fishsanity: "none",
                friendsanity: "none",
                gingerIsland: "no",
                endGame: "no",
                minesChests: "yes", // Change only if Vanilla
                monstersanity: "onePerCategory",
                movieSanity: "oneMovie",
                museamsity: "milestones",
                otherChecks: "yes", // Change only if Vanilla
                quests: "minimum",
                raccoonChecks: "yes", // Change only if Vanilla
                shipsanity: "none",
                skillProgression: "progressive",
                specialOrders: "board",
                stardrops: "no", // Change only if Vanilla
                toolProgression: "progressive",
                travelingMerchant: "yes", // Change only if Vanilla
                travelingMerchantCount: 6,
                wizardBuildings: "no", // Change only if Vanilla
    
                hideCompleted: false,
            },

            filterState:
            {
                // Chefsanity
                chefCategory:
                {
                    friendship: false,
                    purchase: false,
                    queenOfSauce: false,
                    skills: false
                },

                eatType:
                {
                    artisan: false,
                    cooking: false,
                    crop: false,
                    fish: false,
                    shop: false
                },

                hatType:
                {
                    difficult: false,
                    easy: false,
                    medium: false,
                    nearPerfection: false,
                    postPerfection: false,
                    rng: false,
                    tailoring: false
                },

                secretType:
                {
                    difficult: false,
                    easy: false,
                    fishing: false,
                    note: false
                },

                walnutType:
                {
                    bush: false,
                    digSpot: false,
                    puzzle: false,
                    repeatable: false
                }
            }
        },
    
    vanillaPerfection:
        {
            settings:
            {
                arcade: "disabled",
                backpack: "12",
                bookSanity: "none",
                buildingProgression: "vanilla",
                bundles: "withoutJoja", // Change only if Vanilla
                cooksanity: "all",
                craftsanity: "all",
                cropsanity: "disabled",
                elevatorProgression: "vanilla",
                festivalLocations: "none",  
                fishsanity: "vanillaPerfectionFish",
                friendsanity: "vanillaPerfectFriend",
                gingerIsland: "no",
                endGame: "no",
                minesChests: "no", // Change only if Vanilla
                monstersanity: "goals",
                movieSanity: "none",
                museamsity: "all",
                otherChecks: "no", // Change only if Vanilla
                quests: "none",
                raccoonChecks: "no", // Change only if Vanilla
                shipsanity: "fullShipment",
                skillProgression: "progressiveMaster",
                specialOrders: "vanilla",
                stardrops: "yes",
                toolProgression: "vanilla",
                travelingMerchant: "no", // Change only if Vanilla
                travelingMerchantCount: 1,
                wizardBuildings: "yes", // Change only if Vanilla
    
                hideCompleted: false,
            },

            filterState:
            {
                // Chefsanity
                chefCategory:
                {
                    friendship: true,
                    purchase: true,
                    queenOfSauce: true,
                    skills: true
                },

                eatType:
                {
                    artisan: false,
                    cooking: false,
                    crop: false,
                    fish: false,
                    shop: false
                },

                hatType:
                {
                    difficult: false,
                    easy: false,
                    medium: false,
                    nearPerfection: false,
                    postPerfection: false,
                    rng: false,
                    tailoring: false
                },

                secretType:
                {
                    difficult: false,
                    easy: false,
                    fishing: false,
                    note: false
                },

                walnutType:
                {
                    bush: true,
                    digSpot: true,
                    puzzle: true,
                    repeatable: true
                }
            }
        },
};