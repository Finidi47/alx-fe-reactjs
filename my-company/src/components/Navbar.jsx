import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}><p>Home</p></Link></li>
                    <li><Link to={"/about"}><p>About</p></Link></li>
                    <li><Link to={"/services"}><p>Services</p></Link></li>
                    <li><Link to={"/contact"}><p>Contact</p></Link></li>
                </ul>
            </nav>
                
        </>

    )

}

export default Navbar;