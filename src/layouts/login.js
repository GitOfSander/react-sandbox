import React, { useContext, useEffect, useRef, useState }  from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from '../assets/scss/layouts/login.module.scss';

import { AnimateHeight } from '../assets/js/animations/height.animation';
import AppContext from '../app.context';
import LoginNavComponent from '../components/login-nav';
  
function LoginLayout() {
    const loginPanelRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false)
    const {loginPanelHeight, setLoginPanelHeight} = useContext(AppContext)
    const [startHeight] = useState(loginPanelHeight)

    const variants = {
        open: {
            opacity: 1,
            height: loginPanelHeight,
            x: 0
        },
        collapsed: { opacity: 1, height: startHeight, x: 0 }
    };

    useEffect(() => {
        setTimeout(function() {
            setIsOpen(true)
        }, 50)

        const panel = loginPanelRef.current
        const resizeObserver = new ResizeObserver(() => {
            setLoginPanelHeight(panel.clientHeight)
        })

        resizeObserver.observe(panel)
    }, [setLoginPanelHeight])

    return (
        <div className="container-fluid p-0">
            <div className="row m-0 justify-content-center">
                <div className="col-12 p-0">
                    <div className="row m-0">
                        <div className={ styles.background + " col-lg-12 p-0" }>
                            <div className={ styles.panel + " d-flex align-items-start justify-content-center flex-direction-column"}>
                                <AnimateHeight variants={variants} isVisible={isOpen}>
                                    <div ref={ loginPanelRef } className={ styles.inner }>
                                        <motion.div
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{duration: 0.5}}>
                                            <Outlet context={ loginPanelRef } />
                                        </motion.div>
                                    </div>
                                </AnimateHeight>
                                
                                <LoginNavComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default LoginLayout; 