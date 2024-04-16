import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur aliquid molestias cupiditate quia tempore sint veniam deleniti, tempora hic. Laudantium ipsam harum natus et vitae.</p>

            <p>Go to the
                <Link to="/"> Homepage.</Link>
            </p>
        </div>
    )
}

export default NotFound
