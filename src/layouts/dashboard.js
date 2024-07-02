import React, { useContext, useEffect, useRef, useState }  from 'react'
import { Outlet } from 'react-router-dom'

import styles from '../assets/scss/layouts/dashboard.module.scss'

import SidebarComponent from '../components/sidebar'

function DashboardLayout() {
    useEffect(() => {
    })

    return (
        <>
            <SidebarComponent></SidebarComponent>

            <div className={ styles.wrapper }>
                <Outlet />
            </div>
        </>
    )
}
  
export default DashboardLayout; 