import { RemoveToken } from "../services/token"



function Home() {
  return (
    <div>
        <h1>Home</h1>

        <button onClick={()=> RemoveToken()}>Logout</button>
    </div>
  )
}

export default Home