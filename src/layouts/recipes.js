import React, { useContext, useEffect, useRef, useState }  from 'react'
import { Outlet } from 'react-router-dom'

import styles from '../assets/scss/layouts/recipes.module.scss'

function RecipesLayout() {
    useEffect(() => {
    })

    return (
        <>
            <div className={ styles.wrapper }>
                <h1 className={ styles.title }>Recipes</h1>

                <Outlet />
            </div>
        </>
    )
}
  
export default RecipesLayout; 