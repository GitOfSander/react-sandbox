import React from 'react';

const IngredientFieldsList = ({ ingredients, handleChange, handleAddIngredient }) => {
    return (
        <div>
            <label>Ingredients:</label>
            {ingredients.map((ingredient, index) => (
                <div className='row' key={index}>
                    <div className='col-auto'>
                        <label>{index + 1}:</label>
                    </div>
                    <div className='col-auto'>
                        <input
                            type="text"
                            name={`ingredient-${index}-name`}
                            className='form-control'
                            placeholder="Name"
                            value={ingredient.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-auto'>
                        <input
                            type="text"
                            name={`ingredient-${index}-amount`}
                            className='form-control'
                            placeholder="Amount"
                            value={ingredient.amount}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-auto'>
                        <select
                            name={`ingredient-${index}-amountType`}
                            className='form-control'
                            value={ingredient.amountType}
                            onChange={handleChange}
                        >
                            <option value="Grams">Grams</option>
                            <option value="Oz">Oz</option>
                            <option value="Cups">Cups</option>
                        </select>
                    </div>
                </div>
            ))}
            <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
        </div>
    );
};

export default IngredientFieldsList;