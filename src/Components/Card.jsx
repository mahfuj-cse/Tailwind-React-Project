import React from 'react';

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">Card Title</h2>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
      <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-blue-600 transition-all duration-300 ease-in-out">Button</button>
    </div>
  );
};

export default Card;
