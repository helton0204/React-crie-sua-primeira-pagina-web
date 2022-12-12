import Header from './componentes/header/Header';
import styled from 'styled-components'; //ferramenta para fazer a estilização css no próprio arquivo jsx
import Pesquisa from './componentes/pesquisa/Pesquisa';
import UltimosLancamentos from './componentes/ultimosLancamentos/UltimosLancamentos';

//nesse caso AppContainer tem a função de uma div. Deve começar com letra maiúscula por se tratar de um elemento personalizado
const AppContainer = styled.div` 
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}
export default App;
