import './App.css';
import { ToastContainer  } from 'react-toastify';
import { useWatchAuth } from './features/authentification/authentification.js';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from './state/StateProvider';
import { AuthValidRoutes, InvalidAuthRoutes, NoAuthRoutes } from './Routes/Routes';

function App() {
  const [{user},dispatch]=useStateValue();
  useWatchAuth(dispatch,user)
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen h-[100%] ">

      {
        !user?(
          <NoAuthRoutes /> 
        ):(
          user?.isValid?(
            <AuthValidRoutes />
          ):(
            <InvalidAuthRoutes /> 
          )
        )
      }
      <ToastContainer /> 
    </div>
  );
}

export default App;
