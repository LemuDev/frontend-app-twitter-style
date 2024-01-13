export function getToken() {
    const token =  sessionStorage.getItem("token")
    
    if(token == null){
        return ""
    }

    return token
}


export function setToken(token: string){
    sessionStorage.setItem("token", token)
}

export function RemoveToken() {
    sessionStorage.removeItem("token")
}