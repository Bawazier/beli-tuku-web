import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LinkCard = styled(Link)``;

export const TextCategory = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  color: #ffffff;
  position: absolute;
`;

export const ImagesCategory = styled.img`
  width: 116px;
  height: 146px;
`;

export const BackgroundColors = styled.div`
  width: 206px;
  height: 220px;

  background: ${props => props.colors};
  border-radius: 8px;
`;