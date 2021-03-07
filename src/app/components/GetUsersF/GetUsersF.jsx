import React, { useState, useEffect } from "react";
import {
  Container,
  HeaderImageContainer,
  HeaderRow,
  HeaderColumn,
  BackgroundImageText,
  Heading1,
  Heading2,
  InputTypeSearch,
} from "../Header/Header.styled";
import { Panel, PanelText } from "Components/GetUsersC/GetUsersC.styled";
import Arrow from "../../../../public/icons/circle-arrow.svg";
import Search from "../../../../public/icons/seach.svg";
import moment from "moment";

const url = "https://randomuser.me/api/?results=10&seed=35300fbcf38bee1d";

const GetUsersF = () => {
  const [users, setUsers] = useState([]);
  const [filterString, setFilter] = useState("");

  const fetchUserData = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users.results);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <HeaderImageContainer>
        <HeaderRow>
          <HeaderColumn>
            <BackgroundImageText>
              <Heading1>
                Find a member <br></br>of&nbsp;staff
              </Heading1>
              <Heading2>Use the search box to get started</Heading2>
              <div className="input-group">
                <InputTypeSearch
                  type="text"
                  className="form-control"
                  placeholder="Start typing..."
                  onChange={(event) => {
                    setFilter(event.target.value);
                  }}
                ></InputTypeSearch>

                <div className="input-group-icon">
                  <span className="search-button" type="button">
                    <i>
                      <Search />
                    </i>
                  </span>
                </div>
              </div>
            </BackgroundImageText>
          </HeaderColumn>
        </HeaderRow>
      </HeaderImageContainer>

      <Container>
        <div className="padding-top-40">
          {users
            .filter((user) => {
              if (filterString == "") {
                return user;
              } else if (
                user.name.first
                  .toLowerCase()
                  .includes(filterString.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => {
              // Other solution using styled components
              /* const borderWhite = {
            border: '15px solid #FFFFFF'
          } */

              return (
                <div key={user.login.uuid} className="padding-bottom-20">
                  <Panel>
                    <span className="hidden">
                      {
                        (user.dob.date = moment(`${user.dob.date}`).format(
                          "DD/MM/YYYY"
                        ))
                      }
                    </span>
                    <a
                      href={
                        "/Profile?" +
                        "na=" +
                        user.name.first +
                        "&" +
                        "la=" +
                        user.name.last +
                        "&" +
                        "em=" +
                        user.email +
                        "&" +
                        "img=" +
                        user.picture.large +
                        "&" +
                        "dob=" +
                        user.dob.date +
                        "&" +
                        "p=" +
                        user.phone
                      }
                      className="panel-info"
                    >
                      <img
                        className="profile-img"
                        src={user.picture.thumbnail}
                        alt={user.name.first}
                      />

                      <PanelText>
                        {user.name.first} {user.name.last}
                      </PanelText>

                      <span>
                        <Arrow className="circle-arrow" />
                      </span>
                    </a>
                  </Panel>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default GetUsersF;
