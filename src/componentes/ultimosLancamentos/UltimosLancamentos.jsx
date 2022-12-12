import styled from 'styled-components';
import {livros} from '../pesquisa/dadosUltimosLancamentos';
import {Titulo} from '../titulo/titulo'
import CardRecomendacao from '../cardRecomendacao/CardRecomendacao';
import imagemLivro from '../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamFonte="36px" 
                alinhamento="center"
            >
                    Últimos Lançamentos
            </Titulo>

            <NovosLivrosContainer>
                {livros.map((livro, index) => (
                    <img key={index} src={livro.src}/>
                ))}
            </NovosLivrosContainer>

            <CardRecomendacao 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação integrada com a plataforma Google."
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;