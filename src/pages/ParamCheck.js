import { useParams } from "react-router";

const ParamCheck = () => {
  const params = useParams();
  return (
    <>
      <h1>Details page for : {params.eID}</h1>
    </>
  );
};

export default ParamCheck;
