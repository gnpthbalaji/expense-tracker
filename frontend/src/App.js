import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { MainLayout } from "./styles/layouts";
import Gradient from "./components/gradient/gradient";
import Navigation from "./components/navigation/navigation";
import Dashboard from "./components/dashboard/dashboard";
import AllTransaction from "./components/allTransaction/allTransaction";
import Income from "./components/income/income";
import Expenses from "./components/expenses/expenses";
import Login from "./components/loginSignUp/login";
import SignUp from "./components/loginSignUp/signUp";
import { useGlobalContext } from "./context/global";

function App() {
  const [active, setActive] = useState(1);
  const globalContext = useGlobalContext();
  console.log(globalContext);

  const displayData = useMemo(() => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <AllTransaction />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  }, [active]);

  const gradientMemo = useMemo(() => <Gradient />, []);

  return (
    <Router>
      <AppStyled>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <>
                {gradientMemo}
                <MainLayout>
                  <Navigation active={active} setActive={setActive} />
                  
                  <main>
                  <div className="auth-links">
                    <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
                  </div>
                  {displayData}
                  </main>
                </MainLayout>
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  .auth-links {
    position: absolute;
    top: 10px;
    right: 10px;
    a {
      color: var(--main-text-color);
      margin: 0 10px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  main {
    flex: 1;
    background: var(--primary-color3);
    border: 3px solid var(--color-grey);
    color: var(--main-text-color);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
