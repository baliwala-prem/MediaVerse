import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
  const dispatch = useDispatch();

  const tabs = ['photos', 'videos'];

  const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className='flex justify-center gap-6 my-8'>
      {tabs.map((element, idx) => {
        return (
          <>

            <button
              key={idx}
              onClick={() => dispatch(setActiveTabs(element))}
              className={`
    w-52
    py-3
    rounded-full
    font-bold
    text-xl
    border-2
    border-black
    transition-all
    duration-300
    cursor-pointer
    active:translate-y-1
    active:shadow-none
    hover:-translate-y-2
    hover:scale-105
    ${activeTab === element
                  ? "bg-blue-700 text-white shadow-[8px_8px_0px_0px_black]"
                  : "bg-amber-500 text-white shadow-[6px_6px_0px_0px_black] hover:bg-amber-600"
                }
  `}
            >
              {element}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Tabs;