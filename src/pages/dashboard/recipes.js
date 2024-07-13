import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from '../../components/card';
import CheckboxList from '../../components/fields/checkboxList';
import recipeService from '../../services/recipe.service';



const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [filterTags, setFilterTags] = useState([]);
    const tags = ["Sweet", "Salty", "Breakfast", "Lunch", "Dinner"];

    useEffect(() => {
        fetchRecipes();
    }, [filterTags]);

    const fetchRecipes = () => {
        recipeService.getRecipes(filterTags).then(response => {
            setRecipes(response.data);
        });
    };

    const handleFilterChange = (e) => {
        const { value, checked } = e.target;
        const newTags = [...filterTags];
        if (checked) {
            newTags.push(value);
        } else {
            const index = newTags.indexOf(value);
            if (index > -1) {
                newTags.splice(index, 1);
            }
        }
        setFilterTags(newTags);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Card>
                            <CardHeader title="Filters"></CardHeader>
                            <CardBody>
                                <CheckboxList label="Tags"
                                            inputName="tags"
                                            items={tags} 
                                            handleChange={handleFilterChange} 
                                />
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-8">
                        <Card>
                            <CardHeader title="Research" subtitle=""></CardHeader>
                            <CardBody>
                                <Link to="add">Add New Recipe</Link>
                                <ul>
                                    {recipes.map(recipe => (
                                        <li key={recipe.id}>
                                            <Link to={`${recipe.id}`}>{recipe.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeList;