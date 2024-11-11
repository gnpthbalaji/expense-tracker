import React , {useMemo} from "react";
import styled from "styled-components";
import {MainLayout} from "./styles/layouts";
import Gradient from "./components/gradient/gradient";
import Navigation from "./components/navigation/navigation";
import Dashboard from "./components/dashboard/dashboard";
import Income from "./components/income/income";
import Expenses from "./components/expenses/expenses";
import { useGlobalContext } from "./context/global";



function App() {
  
  
  const [active, setActive] = React.useState(1);

  const globalContext = useGlobalContext();
  console.log(globalContext);
  const displayData = useMemo(() => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <h1>View Transactions</h1>;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  }, [active]);
  const gradientMemo = useMemo(() => {
    return <Gradient /> }, []);

  return (
    <AppStyled> 
      {gradientMemo}

      <MainLayout>
        <Navigation active = {active} setActive= {setActive}/>
        <main>   
          {displayData}
        </main>
      
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  main{
    flex: 1;
    border: 3px solid var(--color-grey);
    color: var(--main-text-color);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        width: 0;
    }
  }
`;
export default App;