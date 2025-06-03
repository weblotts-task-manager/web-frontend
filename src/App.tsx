// import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router";
// import AuthNavigation from "./navigation/AuthNavigation";
import MainNavigation from "./routes/MainNavigation";

function App() {
  // const { auth } = useSelector((state: any) => state.auth);

  // {auth.isAuthenticated ? <MainNavigation /> : <AuthNavigation />}
  return (
    <BrowserRouter>
      <MainNavigation />
    </BrowserRouter>
  );
}

export default App;
