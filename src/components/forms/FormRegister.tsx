import { useState } from "react"
import { useForm } from "react-hook-form"

import { RegisterSchemaType } from "../../types/register"
import { zodResolver } from "@hookform/resolvers/zod"

import { registerSchema } from "../../schemas/register"

import LoaderButton from "../LoaderButton"
import { registerServices } from "../../services/register"


export function FormRegister() {
    const { register, handleSubmit, formState: { errors }} = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema)
      })
    
    const [loading, setLoading] = useState(false)
    const [emailError, setEmailError] = useState(null)

    const OnSubmit = async (data: RegisterSchemaType) => {
        setLoading(true)
    
        const res = await registerServices(data)
        
        if(res.error != undefined){
        setEmailError(res.error)
        }else{
        setEmailError(null)
        }

        setLoading(false)

    }
    return (
        <form 
            className="block w-[95%] max-w-lg shadow border border-gray-200 rounded p-4"
            onSubmit={handleSubmit(OnSubmit)}
        >
            <h1 className="text-5xl text-center b-4">Register</h1>

            <div className="my-3">
            <label>First Name</label>
            <input type="text" 
                {...register('first_name')}
                className="
                bg-gray-100 border border-gray-300 
                text-gray-900 
                text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 
                block w-full 
                p-2.5
                "
                placeholder='First Name...'
            />
            {
                errors.first_name?
                <span className="block text-sm pt-1 mb-1 text-red-600">{errors.first_name?.message}</span>
                :null
            }
            </div>

            <div className="my-3">
            <label>last Name</label>
            <input type="text" {...register('last_name')}
                className="
                bg-gray-100 border border-gray-300 
                text-gray-900 
                text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 
                block w-full 
                p-2.5
                "
                placeholder='last Name...'
            />
            {
                errors.last_name?
                <span className="block text-sm pt-1 mb-1 text-red-600">{errors.last_name?.message}</span>
                :null
            }
            </div>

            <div className="my-3">
            <label>Email</label>
            <input type="email" {...register('email')}
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
                errors.email?
                <span className="block text-sm pt-1 mb-1 text-red-600">{errors.email?.message}</span>
                :null
            }

            {
                emailError ?
                <span className="block text-sm pt-1 mb-1 text-red-600">{ emailError }</span>
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
                errors.password?
                <span className="block text-sm pt-1 mb-1 text-red-600">{errors.password?.message}</span>
                :null
            }
            </div>

            <div className="my-3">
            <label>Confirm Password</label>
            <input type="password" 
                {...register('confirm')}
                className="
                bg-gray-100 border border-gray-300 
                text-gray-900 
                text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 
                block w-full 
                p-2.5
                "
                placeholder='Confirm password...'
            />
            {
                errors.confirm?
                <span className="block text-sm pt-1 mb-1 text-red-600">{errors.confirm?.message}</span>
                :null
            }
            </div>
   
            <LoaderButton loading={loading} value="Register"/>
        </form>
    )
}

