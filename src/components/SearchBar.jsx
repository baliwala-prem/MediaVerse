import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';


const SearchBar = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
    }
    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} action="" className='flex '>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full px-4 my-4">
                    {/* Search Input */}
                    <div className="relative flex-1 w-full">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">
                            🔍
                        </span>

                        <input
                            type="text"
                            placeholder="Search photos or videos..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="
        w-full
        pl-14
        pr-5
        py-4
        text-lg
        sm:text-xl
        bg-white
        text-black
        placeholder:text-gray-400
        rounded-2xl
        border-2
        border-black
        shadow-[6px_6px_0px_0px_black]
        outline-none
        transition-all
        duration-300
        focus:ring-4
        focus:ring-amber-300
      "
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        className="
      w-full
      sm:w-48
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-amber-500
      to-orange-600
      text-white
      text-lg
      font-bold
      border-2
      border-black
      shadow-[6px_6px_0px_0px_black]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-[8px_8px_0px_0px_black]
      active:translate-y-1
      active:shadow-none
    "
                    >
                        🔍 Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
