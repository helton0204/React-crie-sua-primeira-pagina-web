import IconesHeader from "../iconesHeader/IconesHeader";
import Logo from "../logo/Logo";
import OpcoesHeader from "../opcoesHeader/OpcoesHeader";
import styled from 'styled-components'; //ferramenta para fazer a estilização css no próprio arquivo jsx

//HeaderContainer tem de começar com letra maiúscula por se tratar de um elemento personalizado
const HeaderContainer = styled.header` 
    display: flex;
    justify-content: center;
    background-color: #fff;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/> 
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}
export default Header;