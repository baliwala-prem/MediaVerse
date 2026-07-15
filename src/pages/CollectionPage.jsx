import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard';
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {

  const collection = useSelector((state) => state.collection.items);
  const dispatch=useDispatch();
  const clearCollectionData=()=>
  {
    dispatch(clearCollection());
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 my-8 px-6">

        {/* Title */}
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 border-4 border-black rounded-2xl px-4 py-4 shadow-[8px_8px_0px_0px_black]">
          <h1 className="text-white text-2xl font-extrabold flex items-center gap-3">
            ❤️ My Collection
          </h1>

          
        </div>

        {/* Clear Button */}
        <button
          onClick={()=>clearCollectionData()}
          className="
      bg-red-500
      hover:bg-red-600
      text-white
      text-2xl
      font-bold
      px-4
      py-4
      rounded-2xl
      border-4
      border-black
      shadow-[6px_6px_0px_0px_black]
      hover:-translate-y-1
      hover:shadow-[9px_9px_0px_0px_black]
      active:translate-y-1
      active:shadow-none
      transition-all
      duration-200
    "
        >
          🗑 Clear Collection
        </button>

      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-2 md:p-5'>
        {
          collection.map((item, id) => {
            return <div key={id}><CollectionCard item={item} /></div>
          })
        }
      </div>
    </div>

  )
}

export default CollectionPage
