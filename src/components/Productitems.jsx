import React from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Productitems = ({ id, image, name, price, category }) => {
    const { currency } = useContext(ShopContext);
    return (
        <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img className='hover:scale-110 trasnition ease-in-out' src={image[0]} alt="" />
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='font-medium text-sm'>{currency}{price}</p>
                <p className='pt-3 pb-1 text-sm'>{category}</p>
            </div>
        </Link>
    )
}

export default Productitems