import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">Move to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
