import React from 'react';
import { useNavigate } from 'react-router-dom';
// img
import homeIcon from '../../static/homeIcon.svg';
import mapIcon from '../../static/mapIcon.svg';
import messageIcon from '../../static/messageIcon.svg';
import userIcon from '../../static/userIcon.svg';
// style
import S from './NavBarStyles';

const NavBar = () => {
  const navigation = useNavigate();

  return (
    <S.Container>
      <S.Icon type="button" onClick={() => navigation('/home')}>
        <img src={homeIcon} alt="Home" />
      </S.Icon>
      <S.Icon type="button">
        <img src={mapIcon} alt="Home" />
      </S.Icon>
      <S.Icon type="button">
        <img src={messageIcon} alt="Home" />
      </S.Icon>
      <S.Icon type="button">
        <img src={userIcon} alt="Home" />
      </S.Icon>
    </S.Container>
  );
};

export default NavBar;
