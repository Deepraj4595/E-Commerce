"use client";

import Image from 'next/image';
import { useState } from 'react';

// Sample product images
import DentalMaterialImg from '@/assets/images/service-icon-1.png';
import DentalEquipmentImg from '@/assets/images/service-icon-1.png';
import FeaturedProductImg from '@/assets/images/service-icon-1.png';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Dental Materials', 'Dental Equipment'];
  
  const products = [
    { id: 1, name: 'Dental Cleaning Kit', category: 'Dental Materials', price: '$50', image: DentalMaterialImg },
    { id: 2, name: 'Advanced Dental Chair', category: 'Dental Equipment', price: '$2000', image: DentalEquipmentImg },
  ];

  const filteredProducts = products.filter(product =>
    (categoryFilter === 'All' || product.category === categoryFilter) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Pune Dental Shop</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore high-quality dental materials and equipment at the best prices.
        </p>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="w-full md:w-1/3 p-3 border rounded-lg shadow-sm focus:outline-none"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Featured Products */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Featured Products</h3>
          <div className="flex justify-center">
            <Image src={FeaturedProductImg} alt="Featured Product" width={300} height={300} />
          </div>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(({ id, name, price, image }) => (
            <div key={id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
              <Image src={image} alt={name} width={250} height={250} className="mx-auto" />
              <h4 className="text-lg font-semibold mt-4 text-center">{name}</h4>
              <p className="text-gray-600 text-center">{price}</p>
              <button className="w-full mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Shop;
