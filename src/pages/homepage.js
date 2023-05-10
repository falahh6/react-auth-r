import { useAuth0 } from "@auth0/auth0-react";
const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <h1>This is home Page</h1>
      <form action="">
        <div>
          <label htmlFor="email">Enter your email : </label>
          <input type="e-mail" id="email" />
        </div>
        <div>
          <label htmlFor="password">Enter your Password : </label>
          <input type="password" name="passsword" id="password" />
        </div>
        <button onClick={() => loginWithRedirect()}>Login</button>
      </form>
    </>
  );
};
export default HomePage;
