import styled from "styled-components";

export const Titulo = styled.h2`
width: 100%;
padding: 30px 0;
background-color: #FFF;
color: ${props => props.cor || "#000"};
font-size: ${props => props.tamFonte || "18px"};
text-align: ${props => props.alinhamento || "center"};
margin: 0;
`

//color: ${props => props.cor || "#EB9B00"}; se props.cor existir a cor será a que foi passada pelo componente Titulo, se não a cor vai ser #EB9B00 por padrão 