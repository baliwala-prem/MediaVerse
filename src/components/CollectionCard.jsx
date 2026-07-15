import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection,removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {
    const dispatch=useDispatch();
    const removeFromCollection=(item)=>{
        dispatch(removeCollection(item))

        dispatch(removeToast())

    }
    return (
        <div>
            
            <div
                className="group relative w-85 overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_black] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_black]"
            >
                <a
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="relative h-60 overflow-hidden">
                        {item.type === "photo" && (
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        )}

                        {item.type === "video" && (
                            <>
                                <video
                                    src={item.src}
                                    poster={item.thumbnail}
                                    autoPlay
                                    muted
                                    loop
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="
                h-16 w-16
                rounded-full
                bg-white/80
                backdrop-blur-sm
                flex items-center justify-center
                text-2xl
                transition
                group-hover:scale-110
              "
                                    >
                                        ▶
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Dark Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                </a>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-4">
                    <h2
                        className="truncate text-lg font-bold text-white"
                        style={{
                            textShadow: "2px 2px 8px rgba(0,0,0,.9)",
                        }}
                    >
                        {item.title}
                    </h2>

                    <div className="mt-3 flex items-center justify-between">
                        <button
                            onClick={
                                () => {
                                    removeFromCollection(item)
                                }
                            }
                            className="
          rounded-full
          bg-red-500
          px-5
          py-2
          font-semibold
          text-white
          shadow-[4px_4px_0px_0px_black]
          transition-all
          hover:bg-red-600
          hover:scale-105
          active:translate-y-1
          active:shadow-none
        "
                        >
                            Remove
                        </button>

                        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-black backdrop-blur">
                            {item.type.toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
