import styled from "styled-components";
import { Link } from "react-router-dom";

export const CirclePicture = styled.div`
width: 60.55px;
overflow: hidden;
`;

export const Picture = styled.img`
width: 60.55px;
height: 60.55px;
`;

export const ProfileName = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #222222;
`;

export const LinkChangeProfile = styled(Link)`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #9B9B9B;
`;

export const LinkIconChangeProfile = styled.img``;

export const LinkIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
background: ${props => props.colors}
`;

export const LinkProfile = styled(Link)`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: ${props => props.onClick ? "#222222" : "#9B9B9B"}
`;