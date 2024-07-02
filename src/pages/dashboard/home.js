import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "../../components/card";

import styles from "../../assets/scss/pages/home.module.scss";



function Home() {

    useEffect(() => {
        return () => {
        }
    }, [])

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Card>
                            <CardHeader title="Dashboard" subtitle="Navigeer via onderstaande knoppen of via het menu aan de linkerzijde"></CardHeader>
                            <CardBody>
                                <p></p>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-4">
                        <Card>
                            <CardHeader title="Snelkeuze menu"></CardHeader>
                            <CardBody>
                                <ul>
                                    <li><Link to="/">Mijn account</Link></li>
                                    <li><Link to="/">Instellingen</Link></li>
                                    <li><Link to="/">Wachtwoord wijzigen</Link></li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default Home