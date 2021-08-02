import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {


    //const [categories, setCategories] = useState(['Dragon Ball']);
    const [category, setCategory] = useState('Dragon Ball');

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategory={setCategory} />
            <hr/>
            <div>
                {/* {
                    categories.map((category) => */
                        (<GifGrid key={category} category={category} />)
                  //  {/* ) */}
                }

            </div>
        </div>
    )
}

export default GifExpertApp;
