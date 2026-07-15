import React, { act, useEffect } from 'react'

import { fetchPhotos, fetchVideo } from '../api/MediaApi';
import { setQuery, setLoading, setError, setResult } from '../redux/features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import ResultCard from './ResultCard';

const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
    const dispatch = useDispatch();

    useEffect(function () {
        if (!query) return;
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = [];
                if (activeTab === 'photos') {
                    let res = await fetchPhotos(query);
                    data = res.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }));
                }

                if (activeTab == 'videos') {
                    let res = await fetchVideo(query);
                    data = res.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }));
                }
                dispatch(setResult(data));
            }
            catch (err) {
                dispatch(setError(err.message));
            }

        }
        getData();
    }, [query, activeTab, dispatch]);

    if (error) {
        return <h1>Error</h1>
    }
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh]">
                <div className="w-20 h-20 rounded-full border-[10px] border-gray-300 border-t-orange-500 animate-spin"></div>

                <h1 className="mt-6 text-3xl font-bold text-white animate-pulse">
                    🔍 Searching Media...
                </h1>

                <p className="text-gray-200 mt-2">
                    Please wait while we fetch your results.
                </p>
            </div>
        );
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-2 md:p-5 '>
            {
                results.map((item, idx) => {
                    return (
                        <div key={idx}>

                            <ResultCard item={item} />

                        </div>
                    );
                })
            }
        </div>
    )
}

export default ResultGrid
