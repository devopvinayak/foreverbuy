import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { assets } from '../assets/assets.js';
import Title from '../components/Title.jsx';
import Productitems from '../components/Productitems.jsx'

const Colletion = () => {
  const { products , search , showSearch } = useContext(ShopContext);

  const [showFilter, setshowFilter] = useState(false)
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setsortType] = useState('relevant')

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setcategory(prev => [...prev, e.target.value])
    }
  }

  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setsubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setfilterProducts(productsCopy)
  }

  const sortProduct = () =>{
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high' :
        setfilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

        case 'high-low' :
          setfilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;

        default: 
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch])

  useEffect(() =>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col md:flex-row gap-1 pt-10 border-t'>
      {/* Filter options */}
      <div className="min-w-60">
        <p onClick={() => setshowFilter(!showFilter)} className='my-2 text-xl flex item-center cursor-pointer gap-2'>FILTER
          <img className={`my-2 h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></p>
        {/* category filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className='w-3' type="checkbox" value={'Men'} onChange={togglecategory} /> MEN
            </p>
            <p className="flex gap-2">
              <input className='w-3' type="checkbox" value={'Women'} onChange={togglecategory} /> WOMEN
            </p>
            <p className="flex gap-2">
              <input className='w-3' type="checkbox" value={'Kids'} onChange={togglecategory} /> KIDS
            </p>
          </div>
        </div>

        {/* Sub-categroy filter */}

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={togglesubCategory} />  TOPWEAR
            </p>
            <p className="flex gap-2">
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={togglesubCategory} />  BOTTOMWEAR
            </p>
            <p className="flex gap-2">
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={togglesubCategory} />  WINTERWEAR
            </p>
          </div>
        </div>
      </div>


      {/* Right side */}

      <div className="flex-1">
        <div className="flex text-base justify-between sm:text-2xl mb:4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product sort */}

          <select onChange={(e)=>setsortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index) => (
              <Productitems key={index} name={item.name} id={item._id} price={item.price} image={item.image} category={item.category} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Colletion