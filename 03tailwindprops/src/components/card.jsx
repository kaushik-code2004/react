import React from 'react';

function Card({userName, titleTxt="Title" , btntxt}) {
    //console.log(userName);
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/29989228/pexels-photo-29989228/free-photo-of-vibrant-green-rice-field-in-bali-indonesia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {titleTxt}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{userName}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button>{btntxt}</button>
      </div>
    )
}

export default Card;   