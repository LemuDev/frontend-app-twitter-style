import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { getToken } from '../services/token';

type Props = {
  children: ReactNode
}

export function ProtectedRoutes(props: Props) {

    const token = getToken()

    if(token == ""){ 
        return <Navigate to={'/login'}></Navigate>
    }

    
    return (
        <>
            {
                token != ""?
                    props.children
                :null
            }
        </>
    )
}

