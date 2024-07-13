import React from 'react';

const CheckboxList = ({ label, inputName, items, selectedItems = [], handleChange }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                {items.map((item, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            name={inputName}
                            value={item}
                            onChange={handleChange}
                            checked={selectedItems.includes(item)}
                        />
                        {item}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CheckboxList;