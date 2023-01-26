import React from 'react'
import { useStateValue } from '../../state/StateProvider'
import { useFile } from '../../Hooks/hooks';

function Photo({onClick,height='h-12',width='w-12'}) {
    const [{user}]=useStateValue();
    const {url}=useFile({file:user?.photo})
    const defaultImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    return (
        <div 
            className='bg-gray-600 bg-opacity-50 hover:bg-gray-500 duration-150 p-[8px] rounded-full' 
            onClick={onClick}
        >
            <img
                className={`${height} ${width} rounded-full cursor-pointer bg-gray-500 `}
                srcSet={user?.photo?url:defaultImage}
                alt="profile"
                referrerPolicy="no-referrer"
            />
        </div>
    )
}

export default Photo