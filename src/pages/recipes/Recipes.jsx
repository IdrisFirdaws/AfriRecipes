import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch(
                    "https://idrisfirdaws.github.io/AfriRecipe-API/recipes.json"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch recipes");
                }
                const data = await response.json();
                // Shuffle the recipes array
                const shuffledRecipes = shuffleArray(data.recipes);
                setRecipes(shuffledRecipes);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        fetchRecipes();
    }, []);

    // Function to shuffle array
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <>
            <div className="recipes-container">
                {recipes.map(recipe => (
                    <div className='recipe-card' key={recipe.id}>
                        <Link to={recipe.id.toString()} className='recipe-card-info' >
                            <img src={recipe.image} alt={recipe.image} className='recipe-img' />
                            <div className='recipe-title'>{recipe.title}</div>
                            <p className='recipe-desc'>{recipe.desc.length > 70 ? recipe.desc.substring(0, 70) + '...' : recipe.desc}</p>
                            <button className='btn'>View recipe</button>
                        </Link>
                    </div>
                ))}
            </div>

        </>
    );
}


export const recipesLoader = async () => {
    const res = await fetch('https://idrisfirdaws.github.io/AfriRecipe-API/recipes.json');

    if (!res.ok) {
        throw Error('Could not fetch recipes');
    }

    return res.json();
};