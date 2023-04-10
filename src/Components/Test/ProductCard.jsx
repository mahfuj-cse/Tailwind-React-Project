import React from 'react';

function ProductCard() {
    const product = {
        name: 'Product Name',
        category: 'Product Category',
        price: '$19.99',
        image: 'https://example.com/image.jpg',
    }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mx-4 my-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="relative pb-2/3">
        <img
          className="absolute h-full w-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="px-4 py-2">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <div className="text-sm font-medium text-gray-500">{product.category}</div>
        <div className="mt-2 font-medium text-gray-900">{product.price}</div>
        <div className="mt-2 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
