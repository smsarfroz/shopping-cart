import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage">
      <div className="description">
        <h1>Curated.</h1>
        <h1>Effortless.</h1>
        <h1>Yours.</h1>
      </div>

      <button className="shopButton"> 
        <Link to="/shop" className="link">
          Shop Now
        </Link>
      </button>
    </div>
  );
};

export default Home;
