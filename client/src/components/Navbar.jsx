import { Link } from "react-router-dom";

// This created my nav bar at the top with my logo.
function Navbar() {
    return (
        <nav> 
            <div className="logo">BP</div>

            <div className="navigation-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/education">Education</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>    
    );
}

export default Navbar;