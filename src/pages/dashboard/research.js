import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "../../components/card";

import styles from "../../assets/scss/pages/research.module.scss";



function Research() {

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
                            <CardHeader title="Research" subtitle=""></CardHeader>
                            <CardBody>
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Bitcoin drop value by more then 50%</h5>
                                            <small>2/11/2023</small>
                                        </div>
                                        <p class="mb-1">Some placeholder content in a paragraph. Some placeholder content in a paragraph.</p>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Bitcoin drop value by more then 50%</h5>
                                            <small>2/11/2023</small>
                                        </div>
                                        <p class="mb-1">Some placeholder content in a paragraph. Some placeholder content in a paragraph.</p>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Bitcoin drop value by more then 50%</h5>
                                            <small>2/11/2023</small>
                                        </div>
                                        <p class="mb-1">Some placeholder content in a paragraph. Some placeholder content in a paragraph.</p>
                                    </a>
                                </div>
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
  
export default Research