import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetail() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
    }, []); // Empty dependency array ensures it only runs once on mount


    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const response = await fetch(
                    "https://idrisfirdaws.github.io/AfriRecipe-API/recipes.json"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch recipes");
                }
                const data = await response.json();
                const selectedRecipe = data.recipes.find(recipe => recipe.id === parseInt(id)); // Convert id to the same type as recipe.id
                setRecipe(selectedRecipe);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        fetchRecipe();
    }, [id]); // Include id as a dependency

    if (!recipe) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return (
        <div className="recipe-details">
            <div className="recipe-top">
                <img src={recipe.image} alt="" className='image' />
                <div className="recipe-top-right">
                    <h2 className='title'>{recipe.title}</h2>
                    <p className='recipe-desc'><strong>{recipe.title}</strong> <span>{recipe.desc}</span></p>
                    <div className="origin">
                        <strong>Country of Origin:</strong> <span>{recipe.origin}</span>
                    </div>
                    <div className="duration">
                        <strong>Duration</strong>
                        <div className="duration-detail">
                            <p><strong>prep time:</strong> <span>"{recipe['prep-time']}"</span></p>
                            <p><strong>Cook time:</strong> <span>{recipe['cook-time']}</span></p>
                        </div>
                    </div>
                    <p><strong>serves:</strong> <span>{recipe.serve}</span></p>
                </div>
            </div>
            <div className="recipe-buttom">
                <div className="ingredients">
                    <h2>Ingredients:</h2>
                    <ul className='ingredient-list'>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="instruction">
                    <h2>Instructions:</h2>
                    <ol className='instruction-list'>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}


export const recipeDetailsLoader = async () => {
    const res = await fetch('https://idrisfirdaws.github.io/AfriRecipe-API/recipes.json');

    if (!res.ok) {
        throw Error('Could not fetch recipes');
    }

    return res.json();
};