import React, {useState} from 'react';
//import * as S from './styled'
import {useHistory} from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    
    return (
      <S.Container>
        <S.Content>
          <S.Input placeholder="Usuário" className="usuario" onChange={e=> setUser(e.target.value)} value={user} />
          <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Content>
        {erro ? <S.ErrorMsg>{userError}</S.ErrorMsg> : ''}
      </S.Container>
    );
  }
