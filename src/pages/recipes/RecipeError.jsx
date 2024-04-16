import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function RecipeError() {

    const error = useRouteError()

    return (
        <div className='recipe-error'>
            <h2>Error</h2>
            <p>{error.message}</p>

            <Link to="/">Go back to Homeapage.</Link>
        </div>
    )
}
