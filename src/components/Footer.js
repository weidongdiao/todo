import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        <FilterLink filter="SHOW_ALL">
            <button className = "button">All</button>
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
            <button className = "button">Active</button>
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
            <button className = "button">Completed</button>
        </FilterLink>
    </p>
)

export default Footer
