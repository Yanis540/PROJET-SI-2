
import { useSearchParams } from 'react-router-dom';
import { 
    useSendValidationEmail,
    useValidateUser
} from '../../features/authentification/authentification';
import { useError } from '../../Hooks/hooks';
import { useStateValue } from '../../state/StateProvider';
import useEmailSent from './hooks/useEmailSent';
import useValidateEmail from './hooks/useValidateEmail';
function Invalid() {
    // eslint-disable-next-line no-empty-pattern
    const [{user},dispatch]=useStateValue()
    const [searchParams] = useSearchParams();
    const token=searchParams.get('token');
    const {data:sendValidationData,error:sendValidationError,execute:sendValidationEmail}=useSendValidationEmail({accessToken:user?.accessToken})
    const {data:validationResultData,error:validationError,execute:validateEmail}=useValidateUser({accessToken:user?.accessToken,params:{token}})
    const error=sendValidationError|| validationError

    const handleSendMailToConfirm=async(e)=>{
        await sendValidationEmail()
    }
    useEmailSent({sendValidationData})
    useValidateEmail({token,validateEmail,validationResultData,dispatch});

    useError({error});
    return (
        <div className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100  relative">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                
                    <p className="text-2xl font-semibold text-gray-700 md:text-3xl mb-3">Sorry, Your Email Has Not Been Confirmed.</p>
                    {/* <p className="mt-4 mb-8 dark:text-gray-400">{paragraph}</p> */}
                    <button 
                        onClick={handleSendMailToConfirm} 
                        rel="noopener noreferrer" 
                        className="px-8 py-3 font-semibold rounded bg-gradient-to-r to-indigo-500 from-purple-500 text-gray-900 cursor-pointer"
                    >
                        Confirm Email
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Invalid