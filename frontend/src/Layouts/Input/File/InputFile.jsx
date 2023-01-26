import React from 'react'

function InputFile({onChange}) {
  return (
    <>
        <label 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
            htmlFor="file_input"
        >
            Choisir
        </label>
        <input 
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            aria-describedby="file_input_help" 
            type="file" 
            onChange={onChange}
        />
    </>
  )
}

export default InputFile