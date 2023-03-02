import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="flex items-center">
            <Link to="/ventas" className="mx-2">ventas</Link>
        </div>
    )
}