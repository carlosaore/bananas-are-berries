import { Link } from "react-router-dom";

const Navbar = () => (
    /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
    <nav>
        <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/page1">PAGE1</Link></li>
        <li><Link to="/page2">PAGE2</Link></li>
        <li><Link to="/page3">PAGE3</Link></li>
        <li><Link to="/page4">PAGE4</Link></li>
        </ul>       
    </nav>
);

export default Navbar;