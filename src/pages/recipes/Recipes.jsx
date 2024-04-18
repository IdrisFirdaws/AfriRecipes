import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';

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
                setRecipes(data.recipes);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        fetchRecipes();
    }, []);



    return (
        <>
            <div className="recipes-container">
                {recipes.map(recipe => (
                    <div className='recipe-card' key={recipe.id}>
                        <Link to={recipe.id.toString()} className='recipe-card-info' >
                            <img src={recipe.image} alt="" className='recipe-img' />
                            <div className='recipe-title'>{recipe.title}</div>
                            <p className='recipe-desc'>{recipe.desc}</p>
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