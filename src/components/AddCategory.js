import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategory }) => {
    const [newcategory, setNewcategory] = useState('');
    const handleAdd = (value) => {
        if (value.trim().length > 2) {
            // setCategories((categories) => [...categories, value]);
            setCategory(value);
            setNewcategory('');
        }
    }

    return (
        <div className="searchContainer">
            <details>
                <summary >Search by category</summary>
                <div className="searchForm">
                    <input className="inputSearch" value={newcategory} type="text" name="newcategory" onChange={($event) => setNewcategory($event.target.value)} ></input>
                    <button className="buttonSearch" onClick={() => handleAdd(newcategory)}>Search</button>
                </div>
            </details>
        </div>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory
