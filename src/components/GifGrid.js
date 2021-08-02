import React from 'react';
import { useFetchGifs } from './../hooks/useFetchGifs';
import PropTypes from 'prop-types';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    return (
        <>
            <h4>Results for {category}</h4>
           
                {loading && <p className="animate__animated animate__flash">Loading...</p>} 
                <div className="categories">
                { (
                    images.map((img) => {
                        return (<GifItem key={img.id}  {...img} />)
                    })
                )}

            </div>
        </>)
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
