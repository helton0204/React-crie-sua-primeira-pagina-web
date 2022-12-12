import styled from "styled-components";


const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

function OpcoesHeader(){
    const opcoesMenu = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
    
    return(
        <Opcoes>
            {opcoesMenu.map((opcao, index) => (
                <Opcao key={index}>
                    <p>{opcao}</p>
                </Opcao>
            ))}
        </Opcoes>
    )
} 
export default OpcoesHeader;