import Headersearch from "./Headersearch"
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    
    return (
        <div className="header-container">
            <h1>
                <Link className="header-title" to={'/'}>Top Crypto Currencies</Link>
            </h1>
            {location.pathname==='/'&&<Headersearch />}
        </div>
    )
}