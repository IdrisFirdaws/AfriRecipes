import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function RecipeDetail() {
    const { id } = useParams();
    const recipe = useLoaderData();

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

export const recipeDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/recipes/${id}`);

    if (!res.ok) {
        throw Error('Could not find that recipe');
    }

    return res.json();
};
