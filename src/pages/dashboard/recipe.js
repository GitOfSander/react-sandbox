import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from '../../components/card';
import recipeService from '../../services/recipe.service';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getRecipe(id).then(response => {
            setRecipe(response.data);
        });
    }, [id]);

    const handleDelete = () => {
        recipeService.deleteRecipe(id).then(() => {
            navigate('/dashboard/recipes');
        });
    };

    if (!recipe) return <div>Loading...</div>;

    const ingredients = JSON.parse(recipe.ingredients);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Card>
                            <CardHeader title="Research" subtitle=""></CardHeader>
                            <CardBody>
                                <h1>{recipe.title}</h1>
                                <p>{recipe.description}</p>
                                <h2>Ingredients</h2>
                                <ul>
                                    {ingredients.map((ingredient, index) => (
                                        <li key={index}>
                                            {ingredient.name}: {ingredient.amount} {ingredient.amountType}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => setShowConfirm(true)}>Delete</button>
                                <button onClick={() => navigate(`/dashboard/recipes/edit/${recipe.id}`)}>Edit</button>
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

            {showConfirm && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Confirm Deletion</h2>
                        <p>Are you sure you want to delete this recipe?</p>
                        <button onClick={handleDelete}>Yes</button>
                        <button onClick={() => setShowConfirm(false)}>No</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default RecipeDetail;