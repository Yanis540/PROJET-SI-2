import {useNavigate} from 'react-router-dom'
function NotFound({login}) {
    const navigate=useNavigate();
    const paragraphNotFoundHomePage="But dont worry, you can find plenty of other things on our homepage."
    const paragraphNotFoundLogin="But dont worry, you need To Be Logged In ."
  return (
    <section className="flex items-center h-full p-16 bg-gray-900 text-gray-100 relative">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 text-gray-400">{login? paragraphNotFoundLogin:paragraphNotFoundHomePage}</p>
                <button onClick={(e)=>navigate('/')} rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-gradient-to-r to-indigo-500 from-purple-500 text-gray-900 cursor-pointer">{login?("Login"):('Back to homepage')}</button>
            </div>
        </div>
    </section>
  )
}

export default NotFound