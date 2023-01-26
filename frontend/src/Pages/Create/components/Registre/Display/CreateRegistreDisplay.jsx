import React from 'react'

function CreateRegistreDisplay() {
  return (
    <div className='flex flex-row items-center justify-between'>
        <div> Crée un nouveau registre </div>
        <div>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Year : <span className="text-gray-100"> {new Date().getFullYear()}</span>
            </p>
        </div>
    </div>
  )
}

export default CreateRegistreDisplay