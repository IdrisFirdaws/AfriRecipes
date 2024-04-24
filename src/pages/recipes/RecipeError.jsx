import React, { useEffect } from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function RecipeError() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
    }, []); // Empty dependency array ensures it only runs once on mount


    const error = useRouteError()

    return (
        <div className='recipe-error'>
            <h2>Error</h2>
            <p>{error.message}</p>

            <Link to="/">Go back to Homeapage.</Link>
        </div>
    )
}
