import toast from 'react-hot-toast'
import  { LoginSchemaType } from '../types/login'
import { setToken } from './token'


export async function LoginServices(data: LoginSchemaType) {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    const bodyTemplate = {    
        "email": data.email,
        "password": data.password
          
    }

    const res = await fetch(BACKEND_URL + "/api/auth/login", {
        method:'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyTemplate)
    })

    const resData = await res.json()

    if(res.status >= 400){
        toast.error(resData.error)
        return
    }

    const token: string  = await resData.access_token
   
    await setToken(token)
}