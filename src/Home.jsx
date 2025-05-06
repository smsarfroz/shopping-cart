import { Link } from "react-router-dom";

const Home = () => {
 return (
    <>
        <h1>Shop without any hassle</h1>

        <h2>There is something for everyone!</h2>

        <button>
            <Link to="/shop" className="link">Shop Now</Link>
        </button>
    </>
 );
}

export default Home;