import React from "react";
//we can also use Grid as column but i perefer using my custom one.
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Dob from "../../../../public/icons/dob.svg";
import Email from "../../../../public/icons/email.svg";
import Phone from "../../../../public/icons/phone.svg";
import Header from "Components/Header/Header";
import {
  HeaderImageContainer,
  HeaderRow,
  HeaderColumn,
  BackgroundImageText,
  Container,
  Heading1,
  Heading2,
  Heading3,
} from "Components/Header/Header.styled";

const Profile = (props) => {
  //below is if we perefer to clear the query strings from the url
  //history.replaceState({}, "Title", "Profile");

  //parsing the querystring with a
  //library as it removed from some of the previous versions
  const queryString = require("query-string");
  const parsed = queryString.parse(props.location.search);

  return (
    <>
      <Header />
      <HeaderImageContainer>
        <HeaderRow>
          <HeaderColumn>
            <BackgroundImageText>
              <Heading1>
                {parsed.na} {parsed.la}
              </Heading1>
              <Heading2>{parsed.em}</Heading2>
            </BackgroundImageText>
          </HeaderColumn>
        </HeaderRow>
      </HeaderImageContainer>
      <Container>
        <div className="user-details-panel" style={{ verticalAlign: "middle" }}>
          <Row>
            <Col xs={12} md={12} style={{ textAlign: "center" }}>
              <img
                className="profile-img"
                style={{ border: "15px solid #FFFFFF" }}
                src={parsed.img}
                alt={parsed.na}
              />

              <Heading3>
                {" "}
                {parsed.na} {parsed.la}
              </Heading3>
            </Col>
          </Row>
          <Row className="icon-wrap">
            <Col
              className="padding-bottom-20 icon-title"
              xs={12}
              sm={12}
              md={4}
            >
              <i>
                <Email className="user-detail-icon" />
              </i>
              {parsed.em}
            </Col>

            <Col className="padding-bottom-20 icon-title" xs={12} md={4}>
              <i>
                <Dob className="user-detail-icon" />
              </i>
              {parsed.dob}
            </Col>

            <Col className="icon-title" xs={12} md={4}>
              <i>
                <Phone
                  className="user-detail-icon"
                  style={{ width: "18px", marginBottom: "-5px" }}
                />
              </i>
              {parsed.p}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Profile;
