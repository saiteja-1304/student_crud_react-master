import './index.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
    <nav className="navbar">
        <div className="logo">
            <img src="https://res.cloudinary.com/dcdjsfp46/image/upload/v1723544826/logo_cd7dlw.jpg" alt="img here"/>
            <h1>AIM</h1>
        </div>
       <ul className='nav-link'>
        <li>
            <Link to="/">Add Student </Link>
            </li>
        <li>
        <Link to="/studentdetails">Student Details</Link>
        </li>
       </ul>
    </nav>
    )
}
export default Navbar;