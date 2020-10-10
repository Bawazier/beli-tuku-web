import styled from 'styled-components';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

export const CardOriginal = styled(Card)`
  width: 208px;
  height: 278px;
  background: #ffffff;
  box-shadow: 0px 0px 14px rgba(173, 173, 173, 0.25);
  border-radius: 8px;
`;

export const BodyCard = styled(CardBody)`
  padding: 10px 15px 5px 15px;
`;

export const ImgCard = styled(CardImg)`
  width: 208px;
  height: 136px;
`;

export const TitleCard = styled(CardTitle)`
  width: 184px;
  height: 48px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  overflow: auto;
`;

export const SubtitleCard = styled(CardSubtitle)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #db3022;
`;

export const TextCard = styled(CardText)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #9b9b9b;
`;

export const CountRatings = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 8px;
  color: #9b9b9b;
  margin-left: 5px;
`;

export const Ratings = styled.div`
  display: flex;
  align-items: center;
`;