import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';

export default function Recipes() {
    const recipes = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    // Filter recipes based on search query
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle search query change
    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            {/* Search input field */}
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search recipes"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button className='btn'>Search</button>
            </div>
            <div className='recipes-container'>

                {/* Display filtered recipes */}
                {filteredRecipes.map(recipe => (
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
    const res = await fetch('http://localhost:4000/recipes');

    if (!res.ok) {
        throw Error('Could not fetch recipes');
    }

    return res.json();
};
