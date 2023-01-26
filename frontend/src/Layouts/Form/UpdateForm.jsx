import { Inputs } from "../layouts"

function UpdateForm({handleUpdate,inputs,onChange,message}) {
  return (
    <form onSubmit={handleUpdate} className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {message}
        </h3>
        <Inputs inputs={inputs} onChange={onChange} /> 

        <div className="w-full">
            <button 
                type='submit' 
                className='p-2 cursor-pointer e text-gray-500 bg-gray-900 border border-transparent hover:bg-gray-800 group flex h-min items-center justify-center text-center font-medium  rounded-lg  mx-auto mt-5'
            >
                Update
            </button>
        </div>

    </form>
  )
}

export default UpdateForm