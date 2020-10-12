import styled from 'styled-components';
import { Input, Label } from "reactstrap";

export const CirclePicture = styled.div`
  width: 111px;
  overflow: hidden;
`;

export const Picture = styled.img`
width: 111px;
height: 111px;
`;

export const SelectImage = styled(Label)`
  border: 1px solid #9b9b9b;
  box-sizing: border-box;
  border-radius: 24px;
  width: 140px;
`;

export const Select = styled(Input)`
visibility:hidden;
`;