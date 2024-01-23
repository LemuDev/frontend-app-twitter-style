import toast from 'react-hot-toast'
import { RegisterSchemaType } from '../types/register'
import { setToken } from './token'


export async function registerServices(data: RegisterSchemaType) {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    
    const templateData = {
        "first_name": data.first_name,
        "last_name": data.last_name,
        "email": data.email,
        "password": data.password
    }

    const res = await fetch(BACKEND_URL + "/api/auth/register", {
        method:'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(templateData)
    })

    const resData = await res.json()


    if(res.status >= 400){
        toast.error(resData.error)
        return resData
    }

    const token: string  = await resData.access_token
    await setToken(token)
}