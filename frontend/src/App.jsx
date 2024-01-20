import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
function App() {
  const [cookies] = useCookies(["token"]);
  const isTokenPresent = cookies.token !== undefined;
  const navigate = useNavigate();
  useEffect(() => {
    if (isTokenPresent) {
      fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: cookies.token }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.auth) {
            navigate("/home");
          } else {
            navigate("/auth");
          }
        });
    } else {
      navigate("/auth");
    }
  }, []);
  return (
    <>{isTokenPresent ? "Tum Home Page jare ho" : "Tum Login Page Jare ho"}</>
  );
}

export default App;
