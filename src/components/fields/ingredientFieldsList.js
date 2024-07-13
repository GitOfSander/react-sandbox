import React from 'react';

const IngredientFieldsList = ({ ingredients, handleChange, handleAddIngredient }) => {
    return (
        <div>
            <label>Ingredients:</label>
            {ingredients.map((ingredient, index) => (
                <div key={index}>
                    <label>{index + 1}:</label>
                    <input
                        type="text"
                        name={`ingredient-${index}-name`}
                        placeholder="Name"
                        value={ingredient.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name={`ingredient-${index}-amount`}
                        placeholder="Amount"
                        value={ingredient.amount}
                        onChange={handleChange}
                    />
                    <select
                        name={`ingredient-${index}-amountType`}
                        value={ingredient.amountType}
                        onChange={handleChange}
                    >
                        <option value="Grams">Grams</option>
                        <option value="Oz">Oz</option>
                        <option value="Cups">Cups</option>
                    </select>
                </div>
            ))}
            <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
        </div>
    );
};

export default IngredientFieldsList;