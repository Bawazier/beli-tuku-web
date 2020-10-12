import React from 'react'
import { Row, Col } from 'reactstrap'
import {
    CirclePicture,
    Picture,
    ProfileName,
    LinkChangeProfile,
    LinkIconChangeProfile,
    LinkIcon,
    LinkProfile
} from './elements'

import edit from '../../Images/edit.svg'
import user from '../../Images/user.svg'
import clipboard from '../../Images/clipboard.svg'
import map from '../../Images/map-pin.svg'
import placeholder from '../../Images/placeholder.png'

export default (props) => {
    return (
        <>
            <Row className="mb-5 align-items-center">
                <Col xs="auto" className="border">
                    <CirclePicture className="rounded-circle">
                        <Picture src={props.picture ? props.picture : placeholder} alt="" />
                    </CirclePicture>
                </Col>
                <Col xs="auto">
                    <ProfileName>{props.name}</ProfileName>
                    <Row>
                        <Col>
                            <LinkIconChangeProfile src={edit} alt="" />
                            <LinkChangeProfile to={props.changeProfile}>Ubah profile</LinkChangeProfile>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mb-2 align-items-center ">
                <Col xs="auto">
                    <LinkIcon colors="#456BF3" className="rounded-circle">
                        <img src={user} alt="" />
                    </LinkIcon>
                </Col>
                <Col xs="auto">
                    <LinkProfile onClick={props.onClick} to={props.myAccount}>My Account</LinkProfile>
                </Col>
            </Row>
            <Row className="mb-2 align-items-center">
                <Col xs="auto">
                    <LinkIcon colors="#F36F45" className="rounded-circle">
                        <img src={map} alt="" />
                    </LinkIcon>
                </Col>
                <Col xs="auto">
                    <LinkProfile onClick={props.onClick} to={props.myAccount}>Shopping Address</LinkProfile>
                </Col>
            </Row>
            <Row className="mb-2 align-items-center">
                <Col xs="auto">
                    <LinkIcon colors="#F3456F" className="rounded-circle">
                        <img src={clipboard} alt="" />
                    </LinkIcon>
                </Col>
                <Col xs="auto">
                    <LinkProfile onClick={props.onClick} to={props.myAccount}>My Order</LinkProfile>
                </Col>
            </Row>
        </>
    )
}
