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

            isPoison: false,
            excludeBackpack: false,

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

    easy:
    {
        settings:
        {
            arcade: "disabled",
            backpack: "12",
            bookSanity: "none",
            buildingProgression: "progressive",
            bundles: "withJoja", // Change only if Vanilla
            cooksanity: "none",
            craftsanity: "none",
            cropsanity: "enabled",
            elevatorProgression: "progressive",
            festivalLocations: "easy",  
            fishsanity: "onlyEasyFish",
            friendsanity: "none",
            gingerIsland: "yes",
            endGame: "no",
            minesChests: "yes", // Change only if Vanilla
            monstersanity: "onePerCategory",
            movieSanity: "none",
            museamsity: "milestones",
            otherChecks: "yes", // Change only if Vanilla
            quests: "minimum",
            raccoonChecks: "yes", // Change only if Vanilla
            shipsanity: "none",
            skillProgression: "progressive",
            specialOrders: "none",
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

            isPoison: false,
            excludeBackpack: false,

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

    medium:
    {
        settings:
        {
            arcade: "arcadeVictories",
            backpack: "12",
            bookSanity: "powerSkill",
            buildingProgression: "progressive",
            bundles: "withJoja", // Change only if Vanilla
            cooksanity: "none",
            craftsanity: "none",
            cropsanity: "enabled",
            elevatorProgression: "progressive",
            festivalLocations: "hard",  
            fishsanity: "excludeLegendaries",
            friendsanity: "startingNpcs",
            gingerIsland: "yes",
            endGame: "no",
            minesChests: "yes", // Change only if Vanilla
            monstersanity: "onePerMonster",
            movieSanity: "none",
            museamsity: "milestones",
            otherChecks: "yes", // Change only if Vanilla
            quests: "normal",
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
                queenOfSauce: true,
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

            isPoison: false,
            excludeBackpack: false,

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

    hard:
    {
        settings:
        {
            arcade: "fullShuffling",
            backpack: "12",
            bookSanity: "all",
            buildingProgression: "progressive",
            bundles: "withJoja", // Change only if Vanilla
            cooksanity: "queenOfSauce",
            craftsanity: "none",
            cropsanity: "enabled",
            elevatorProgression: "progressive",
            festivalLocations: "hard",  
            fishsanity: "all",
            friendsanity: "all",
            gingerIsland: "no",
            endGame: "no",
            minesChests: "yes", // Change only if Vanilla
            monstersanity: "progressiveGoals",
            movieSanity: "allMovies",
            museamsity: "all",
            otherChecks: "yes", // Change only if Vanilla
            quests: "lots",
            raccoonChecks: "yes", // Change only if Vanilla
            shipsanity: "crops",
            skillProgression: "progressiveMaster",
            specialOrders: "boardQi",
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
                purchase: true,
                queenOfSauce: true,
                skills: false
            },

            eatType:
            {
                artisan: true,
                cooking: false,
                crop: true,
                fish: true,
                shop: false
            },

            isPoison: false,
            excludeBackpack: false,

            hatType:
            {
                difficult: false,
                easy: true,
                medium: false,
                nearPerfection: false,
                postPerfection: false,
                rng: false,
                tailoring: false
            },

            secretType:
            {
                difficult: false,
                easy: true,
                fishing: true,
                note: true
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

    nightmare:
    {
        settings:
        {
            arcade: "fullShuffling",
            backpack: "12",
            bookSanity: "all",
            buildingProgression: "progressive",
            bundles: "withJoja", // Change only if Vanilla
            cooksanity: "queenOfSauce",
            craftsanity: "none",
            cropsanity: "enabled",
            elevatorProgression: "progressive",
            festivalLocations: "hard",  
            fishsanity: "all",
            friendsanity: "allWithMarriage",
            gingerIsland: "no",
            endGame: "yes",
            minesChests: "yes", // Change only if Vanilla
            monstersanity: "splitGoals",
            movieSanity: "allMoviesAndAllSnacks",
            museamsity: "all",
            otherChecks: "yes", // Change only if Vanilla
            quests: "maximum",
            raccoonChecks: "yes", // Change only if Vanilla
            shipsanity: "fullShipmentWithFish",
            skillProgression: "progressiveMaster",
            specialOrders: "boardQi",
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
                purchase: true,
                queenOfSauce: true,
                skills: false
            },

            eatType:
            {
                artisan: true,
                cooking: true,
                crop: true,
                fish: true,
                shop: true
            },

            isPoison: true,
            excludeBackpack: true,

            hatType:
            {
                difficult: true,
                easy: true,
                medium: true,
                nearPerfection: false,
                postPerfection: false,
                rng: false,
                tailoring: false
            },

            secretType:
            {
                difficult: true,
                easy: true,
                fishing: true,
                note: true
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
    
    short:
    {
        settings:
        {
            arcade: "disabled",
            backpack: "12",
            bookSanity: "none",
            buildingProgression: "progressive",
            bundles: "withJoja", // Change only if Vanilla
            cooksanity: "none",
            craftsanity: "none",
            cropsanity: "disabled",
            elevatorProgression: "progressive",
            festivalLocations: "none",  
            fishsanity: "none",
            friendsanity: "none",
            gingerIsland: "yes",
            endGame: "no",
            minesChests: "yes", // Change only if Vanilla
            monstersanity: "none",
            movieSanity: "none",
            museamsity: "none",
            otherChecks: "yes", // Change only if Vanilla
            quests: "none",
            raccoonChecks: "yes", // Change only if Vanilla
            shipsanity: "none",
            skillProgression: "progressive",
            specialOrders: "none",
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

            isPoison: false,
            excludeBackpack: false,

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

    minsanity:
    {
        settings:
        {
            arcade: "disabled",
            backpack: "vanilla",
            bookSanity: "none",
            buildingProgression: "vanilla",
            bundles: "withJoja", // Change only if Vanilla
            cooksanity: "none",
            craftsanity: "none",
            cropsanity: "disabled",
            elevatorProgression: "vanilla",
            festivalLocations: "none",  
            fishsanity: "none",
            friendsanity: "none",
            gingerIsland: "yes",
            endGame: "no",
            minesChests: "yes", // Change only if Vanilla
            monstersanity: "none",
            movieSanity: "none",
            museamsity: "none",
            otherChecks: "yes", // Change only if Vanilla
            quests: "none",
            raccoonChecks: "yes", // Change only if Vanilla
            shipsanity: "none",
            skillProgression: "vanilla",
            specialOrders: "none",
            stardrops: "no", // Change only if Vanilla
            toolProgression: "vanilla",
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

            isPoison: false,
            excludeBackpack: false,

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

    allsanity:
    {
        settings:
        {
            arcade: "fullShuffling",
            backpack: "1",
            bookSanity: "all",
            buildingProgression: "progressive",
            bundles: "withJoja", // Change only if Vanilla
            cooksanity: "all",
            craftsanity: "all",
            cropsanity: "enabled",
            elevatorProgression: "progressive",
            festivalLocations: "hard",  
            fishsanity: "all",
            friendsanity: "All",
            gingerIsland: "no",
            endGame: "yes",
            minesChests: "yes", // Change only if Vanilla
            monstersanity: "progressiveGoals",
            movieSanity: "allMoviesAndAllSnacks",
            museamsity: "all",
            otherChecks: "yes", // Change only if Vanilla
            quests: "maximum",
            raccoonChecks: "yes", // Change only if Vanilla
            shipsanity: "everything",
            skillProgression: "progressiveMaster",
            specialOrders: "boardQi",
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
                friendship: true,
                purchase: true,
                queenOfSauce: true,
                skills: true
            },

            eatType:
            {
                artisan: true,
                cooking: true,
                crop: true,
                fish: true,
                shop: true
            },

            isPoison: true,
            excludeBackpack: true,

            hatType:
            {
                difficult: true,
                easy: true,
                medium: true,
                nearPerfection: true,
                postPerfection: true,
                rng: true,
                tailoring: true
            },

            secretType:
            {
                difficult: true,
                easy: true,
                fishing: true,
                note: true
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
            elevatorProgression: "progressive",
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

            isPoison: false,
            excludeBackpack: false,

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

    // Debug options
    
    selectEverything:
        {
            settings:
            {
                arcade: "fullShuffling",
                backpack: "1",
                bookSanity: "all",
                buildingProgression: "progressive",
                bundles: "withJoja", // Change only if Vanilla
                cooksanity: "all",
                craftsanity: "all",
                cropsanity: "enabled",
                elevatorProgression: "progressive",
                festivalLocations: "hard",  
                fishsanity: "all",
                friendsanity: "allWithMarriage",
                gingerIsland: "no",
                endGame: "yes",
                minesChests: "yes", // Change only if Vanilla
                monstersanity: "progressiveGoals",
                movieSanity: "allMoviesAndAllSnacks",
                museamsity: "all",
                otherChecks: "yes", // Change only if Vanilla
                quests: "maximum",
                raccoonChecks: "yes", // Change only if Vanilla
                shipsanity: "everything",
                skillProgression: "progressiveMaster",
                specialOrders: "boardQi",
                stardrops: "yes", // Change only if Vanilla
                toolProgression: "progressive",
                travelingMerchant: "yes", // Change only if Vanilla
                travelingMerchantCount: 12,
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
                    artisan: true,
                    cooking: true,
                    crop: true,
                    fish: true,
                    shop: true
                },

                isPoison: true,
                excludeBackpack: true,

                hatType:
                {
                    difficult: true,
                    easy: true,
                    medium: true,
                    nearPerfection: true,
                    postPerfection: true,
                    rng: true,
                    tailoring: true
                },

                secretType:
                {
                    difficult: true,
                    easy: true,
                    fishing: true,
                    note: true
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

    selectNothing:
        {
            settings:
            {
                arcade: "disabled",
                backpack: "vanilla",
                bookSanity: "none",
                buildingProgression: "vanilla",
                bundles: "none", // Change only if Vanilla
                cooksanity: "none",
                craftsanity: "none",
                cropsanity: "disabled",
                elevatorProgression: "vanilla",
                festivalLocations: "none",  
                fishsanity: "none",
                friendsanity: "none",
                gingerIsland: "yes",
                endGame: "no",
                minesChests: "no", // Change only if Vanilla
                monstersanity: "none",
                movieSanity: "none",
                museamsity: "none",
                otherChecks: "no", // Change only if Vanilla
                quests: "none",
                raccoonChecks: "no", // Change only if Vanilla
                shipsanity: "none",
                skillProgression: "vanilla",
                specialOrders: "none",
                stardrops: "no", // Change only if Vanilla
                toolProgression: "vanilla",
                travelingMerchant: "no", // Change only if Vanilla
                travelingMerchantCount: 1,
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

                isPoison: false,
                excludeBackpack: false,

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
                },
            }
        },
};