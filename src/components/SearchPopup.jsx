import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function SearchPopup({ onClose }) {
  return (
    <div className='fixed inset-0 bg-black  bg-opacity-70 flex justify-center items-center z-50'>
      <div className='bg-white w-[80vw] md:w-[40vw] p-5 relative h-[70%]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-lg -mt-5'>Search</h3>
          <FontAwesomeIcon icon={faClose} onClick={onClose} className='absolute top-2 right-2 text-xl font-bold cursor-pointer' size=''/>
        </div>
        
        <div className='w-[90%] m-auto'>
          <input
            type='text'
            className='w-full p-2 border border-gray-300 rounded-md outline-none mt-5'
            placeholder='Search...'
          />
        </div>
        <div className=''>
          <h3 className='flex justify-center items-center h-[50vh]'>Type for best results</h3>
        </div>
      </div>
    </div>
  );
}
