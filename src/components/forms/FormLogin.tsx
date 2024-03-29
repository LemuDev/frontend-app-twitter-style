import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';

import { LoginSchema } from '../../schemas/login';
import { LoginServices } from '../../services/login'
import { LoginSchemaType } from '../../types/login';

import { useNavigate } from 'react-router-dom';

import { getToken } from '../../services/token';

import LoaderButton from '../LoaderButton';

export function FormLogin() {
    const navigate = useNavigate()

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginSchemaType>({
      resolver: zodResolver(LoginSchema)
    });
  
    const [loading, setLoading] = useState(false)
  
  
    const onSubmit = async (data: LoginSchemaType)=>{
      if(!loading){

        setLoading(true)
        await LoginServices(data)
        setLoading(false)
        
        const token: string = await getToken()
        
        console.log(token)
  
        if(token.length >= 1){
          navigate("/")
        }
  
      }
  
    }

    return (

        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="block w-[95%] max-w-lg shadow border border-gray-200 rounded p-4">
            <h1 className="text-5xl text-center b-4">Login</h1>

            <div className="my-3">
            <label>Email</label>
            <input type="text" 
                {...register('email')}
                className="
                bg-gray-100 border border-gray-300 
                text-gray-900 
                text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 
                block w-full 
                p-2.5
                "
                placeholder='Email...'
            />
            {
                errors.email?.message ?
                <span className='block text-sm pt-1 mb-1 text-red-600'>{errors.email?.message}</span>
                :null
            }
            </div>

            <div className="my-3">
            <label>Password</label>
            <input type="password" 
                {...register('password')}
                className="
                bg-gray-100 border border-gray-300 
                text-gray-900 
                text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 
                block w-full 
                p-2.5
                "
                placeholder='Password...'
            />
            {
                errors.password?.message ?
                <span className='block text-sm pt-1 mb-1 text-red-600'>{errors.password?.message}</span>
                :null
            }
            
            </div>

            <LoaderButton loading={loading} value="Log In" />
        </form>
    )
}

