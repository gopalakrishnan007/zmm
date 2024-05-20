import { useLocation } from "react-router-dom"

export default function Home(){
    const loc = useLocation()
   
    return(
        <>
            <h1>Home</h1>
            <p>{loc.pathname}</p>

        </>
    )
}