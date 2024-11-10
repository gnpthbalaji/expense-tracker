import React , {useMemo} from "react";
import styled from "styled-components";
import {MainLayout} from "./styles/layouts";
import Gradient from "./components/gradient/gradient";
import Navigation from "./components/navigation/navigation";

function App() {
  const gradientMemo = useMemo(() => {
    return <Gradient /> }, []);
  
  const [active, setActive] = React.useState(1);
  return (
    <AppStyled> 
      {gradientMemo}

      <MainLayout>
        <Navigation active = {active} setActive= {setActive}/>
        <main>   
          <h1>Hello</h1>
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