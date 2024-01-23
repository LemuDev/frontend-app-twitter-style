import { Toaster } from 'react-hot-toast';
import { FormLogin } from '../components/forms/FormLogin';



function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      
      <FormLogin/>
    </div>
  )
}

export default Login