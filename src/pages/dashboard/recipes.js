import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from '../../components/card'
//import styles from '../assets/scss/pages/account-details.module.scss'
//import Input from "react-validation/build/input"
//import Form from "react-validation/build/form"
//import CheckButton from "react-validation/build/button"
import recipeService from '../../services/recipe.service'

//import styles from "../../assets/scss/pages/research.module.scss";



function Recipes() {
    const [tableData] = useState({
        header: [
            'Name',
            'Spending limit',
            'Type'
        ],
        items: [
        ]
    })

    useEffect(() => {
        //replacePageClass('bankaccounts')

        const getItems = () => {
            recipeService.getRecipes().then(
                response => {
                    tableData.items = response
    
                    //setLoading(false)
            
                    //setChangesCounter(i => i + 1)
                },
                error => {
                    //setError({getItems: error.response.data})
    
                    //setLoading(false)
                }
            )
            /**/
        }

        getItems()
    }, [document])

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Card>
                            <CardHeader title="Research" subtitle=""></CardHeader>
                            <CardBody>
                                <div class="list-group">
                                    <>
                                        { tableData.items.map((item, index) => {
                                            return (
                                                <a key={ index } href="#" class="list-group-item list-group-item-action" aria-current="true">
                                                    <div class="d-flex w-100 justify-content-between">
                                                        <h5 class="mb-1">{ item.title }</h5>
                                                        <small>2/11/2023</small>
                                                    </div>
                                                    <p className="mb-1">Some placeholder content in a paragraph. Some placeholder content in a paragraph.</p>
                                                </a>
                                            )
                                        })}
                                    </>
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
  
export default Recipes