import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const introMessages = [
    {
        title: "Welcome to Flavor Paradise!",
        description: "Get ready to tantalize your taste buds with our delightful array of recipes from around the globe."
    },
    {
        title: "Embark on a Culinary Adventure!",
        description: "Join us as we explore the world of flavors and cuisines, from traditional classics to modern delights."
    },
    {
        title: "Savor the Moment!",
        description: "Indulge your senses and elevate your dining experience with our collection of mouthwatering recipes."
    },
    {
        title: "Experience the Art of Cooking!",
        description: "Unleash your creativity in the kitchen and master the art of crafting delicious meals that delight the senses."
    },
    {
        title: "Discover the Joy of Home Cooking!",
        description: "Rediscover the joy of cooking with our collection of easy-to-follow recipes that bring comfort and happiness to your kitchen."
    },
    {
        title: "Dive Into a World of Culinary Magic!",
        description: "Encourage visitors to immerse themselves in the enchanting world of cooking and discover the magic of flavors."
    },
    {
        title: "Explore Exotic Flavors!",
        description: "Travel the world through your taste buds with our exotic recipes inspired by cuisines from every corner of the globe."
    },
    {
        title: "Elevate Your Cooking Game!",
        description: "Enhance your culinary skills and impress your friends and family with our chef-inspired recipes and cooking tips."
    },
    {
        title: "Join the Foodie Revolution!",
        description: "Join a community of passionate foodies and explore our curated selection of recipes that celebrate the joy of cooking."
    },
    {
        title: "Taste the Difference!",
        description: "Experience the difference that fresh, homemade meals can make in your life with our collection of wholesome and delicious recipes."
    },
    {
        title: "Create Memories in the Kitchen!",
        description: "Gather your loved ones and create unforgettable memories as you cook together and share meals made with love."
    },
    {
        title: "Unlock the Secrets of Flavor!",
        description: "Discover the secret ingredients and techniques that make each recipe in our collection truly special and memorable."
    },
    {
        title: "Ignite Your Culinary Passion!",
        description: "Ignite your passion for cooking and unleash your inner chef with our diverse range of recipes for every occasion and palate."
    },
    {
        title: "Indulge in Foodie Bliss!",
        description: "Prepare to be whisked away to a world of culinary bliss, where every dish is a masterpiece waiting to be savored."
    },
    {
        title: "Celebrate the Art of Eating!",
        description: "Join us as we celebrate the art of eating well with our collection of recipes that are as beautiful as they are delicious."
    },
    {
        title: "Tantalize Your Taste Buds!",
        description: "Get ready for a flavor explosion as you explore our curated selection of recipes designed to tantalize your taste buds."
    },
    {
        title: "Discover the Joy of Cooking!",
        description: "Rediscover the joy of cooking with our collection of easy-to-follow recipes that bring comfort and happiness to your kitchen."
    },
    {
        title: "Experience Culinary Diversity!",
        description: "Celebrate the rich diversity of global cuisine with our collection of recipes that showcase flavors from around the world."
    },
    {
        title: "Unleash Your Inner Chef!",
        description: "Unleash your creativity and culinary skills as you explore our collection of recipes and create delicious meals that impress."
    },
    {
        title: "Turn Your Kitchen Into a Culinary Playground!",
        description: "Transform your kitchen into a culinary playground and experiment with new flavors, ingredients, and techniques."
    }
];


export default function RecipesLayout() {
    const [randomIntro, setRandomIntro] = useState({});

    useEffect(() => {
        // Select a random intro message
        const randomIndex = Math.floor(Math.random() * introMessages.length);
        setRandomIntro(introMessages[randomIndex]);
    }, []);

    return (
        <div className='recipes-layout'>
            <div className="intro">
                <strong>{randomIntro.title} </strong>
                <span>{randomIntro.description}</span>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}
