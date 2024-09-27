import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Importing close icon

export default function CartButton({ item, bgColor, color, text, className }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const increase = () => {
    setQuantity(prev => prev + 1);
  };

  const decrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div>
      <button
        className={`px-4 py-1 text-semibold rounded-full ${className}`}
        style={{ backgroundColor: bgColor, color: color }}
        onClick={openModal}
      >
        {text}
      </button>

      {/* Modal */}
      {isModalOpen && item && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div className='bg-white w-[70vw] md:w-[60vw] md:h-[90vh] p-5 relative overflow-scroll'>
            <div className='flex justify-between items-center'>
              <h3 className='font-bold text-lg'>Product Details</h3>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={closeModal}
                className='absolute top-2 right-2 text-xl font-bold cursor-pointer'
              />
            </div>

            <div className='w-[90%] md:w-[45%] m-auto'>
              <img src={item.imgUrl} alt={item.title} className='w-full h-auto object-cover mb-4' />
              <h4 className='font-bold text-xl'>{item.title}</h4>
              <p className='text-sm text-gray-600'>{item.subTitle}</p>
              <p className='text-red-500 font-bold mt-2'>Price: Rs {item.price}</p>
              <div className='flex items-center justify-center gap-4 mt-5'>
                <button
                  className='px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200'
                  onClick={decrease}
                >
                  -
                </button>
                <span className='text-xl'>{quantity}</span>
                <button
                  className='px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200'
                  onClick={increase}
                >
                  +
                </button>
              </div>
              <button
                className='w-full mt-5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
                onClick={() => {
                  alert(`Added ${quantity} of ${item.title} to cart`);
                  closeModal();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
