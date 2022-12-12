import React from 'react';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const Icone = styled.li`
  margin-left: 25px;
`

function IconesHeader(){
    const icones = [perfil, sacola];

    return(
        <Icones className='icones'>
          {icones.map((icone, index) => (
            <Icone key={index}>
              <img src={icone}/>
            </Icone>
          ))}
        </Icones>    
    )
}
export default IconesHeader;