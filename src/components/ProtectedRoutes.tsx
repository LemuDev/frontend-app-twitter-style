import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
  token: string,
  children: ReactNode
}

export function ProtectedRoutes(props: Props) {
    const navigate = useNavigate();

    useEffect(() => {
        if(props.token == ""){
            navigate("/login")
            return;
        }
    })
    

    return (
        <>
            {
                props.token != ""?
                    props.children
                :null
            }
        </>
    )
}

