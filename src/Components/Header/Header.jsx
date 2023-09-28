import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <nav style={{marginBottom:'30px'}}>
                <Link to={'/'} style={{marginRight:'20px'}}>Home</Link>
                <Link to={'/login'}>Login</Link>
            </nav>
        </>
    );
};

export default Header;