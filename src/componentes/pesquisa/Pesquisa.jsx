import { useState } from "react";
import styled from "styled-components";
import Input from "../input/Input";
import {livros} from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
`

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [buscaLivro, setBuscaLivro] = useState('');

    function pesquisaDeLivro(livro){
        setBuscaLivro(livro);
        const resultadoPesquisa = livros.filter(item => item.nome.includes(buscaLivro));
        setLivrosPesquisados(resultadoPesquisa);
        console.log(livrosPesquisados);
    }

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro emnossa estante.</SubTitulo>
            <Input
                type='text'
                placeholder="Escreva a sua próxima leitura"
                value={buscaLivro}
                onChange={(event) => pesquisaDeLivro(event.target.value)}
            />
            <Resultado>
                {livrosPesquisados.map(livroPesquisado => (
                    <div>
                        <p>{livroPesquisado.nome}</p>
                        <img src={livroPesquisado.src}/>
                    </div>
                ))}
            </Resultado>
        </PesquisaContainer>
    )
}
export default Pesquisa;