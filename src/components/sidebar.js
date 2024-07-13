import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../assets/scss/components/sidebar.module.scss";

function SidebarComponent() {
    const [openSidebar, setOpenSidebar] = useState(false);

    const toggle = () => {
        setOpenSidebar(prevOpen => !prevOpen);
    };

    return (
        <>
            <div className={styles.toggle} onClick={toggle}>
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 42"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g transform="matrix(1,0,0,1,-389.5,-264.004)">
                        <g id="arrow_left2">
                            <g transform="matrix(1,0,0,1,0,5)">
                                <path
                                    id="top"
                                    d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                                />
                            </g>
                            <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
                                <path
                                    id="bottom"
                                    d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                                />
                            </g>
                            <path id="middle" d="M390,284.967L420,284.967" />
                        </g>
                    </g>
                </svg>
            </div>
            <div className={`${styles.sidebar} ${openSidebar ? styles.open : styles.closed}`}>
                <ul className={styles.navLinks}>
                    <li>
                        <NavLink to="/">
                            <svg width="24" height="24" fill="currentColor">
                                <use xlinkHref="#home" />
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">
                            <svg width="24" height="24" fill="currentColor">
                                <use xlinkHref="#speedometer2" />
                            </svg>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">
                            <svg width="24" height="24" fill="currentColor">
                                <use xlinkHref="#collection" />
                            </svg>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">
                            <svg width="24" height="24" fill="currentColor">
                                <use xlinkHref="#people-circle" />
                            </svg>
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">
                            <svg width="24" height="24" fill="currentColor">
                                <use xlinkHref="#gear-fill" />
                            </svg>
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SidebarComponent;
