import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <h1>Information</h1>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </>
  );
};

export default Info;
