import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../../public/images/products.json'

const ProductList = () => {
  const [filter, setFilter] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      setFilter(category);
    } else {
      setFilter('All');
    }
  }, [location.search]);

  const filteredProducts = products.filter(product => {
    if (filter === 'All') return true;
    return product.category === filter;
  });

  return (
    <div>
<div className="flex justify-center overflow-x-auto space-x-4 my-4 ">
  <button onClick={() => setFilter('All')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">All</button>
  <button onClick={() => setFilter('cup')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">Cup</button>
  <button onClick={() => setFilter('topping')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">Toppings</button>
  <button onClick={() => setFilter('coffee')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">Coffee</button>
  <button onClick={() => setFilter('supplies')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">Supplies</button>
  <button onClick={() => setFilter('cacao')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">Cacao</button>
  <button onClick={() => setFilter('honey')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">Honey</button>
</div>



      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} props={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;