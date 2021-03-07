import React, { Component } from "react";
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

class Filter extends Component {
  render() {
    return (
      <div>
        <InputTypeSearch
          type="text"
          className="form-control"
          placeholder="Start typing..."
          onChange={(event) => this.props.onTextChange(event.target.value)}
        ></InputTypeSearch>
      </div>
    );
  }
}

class Randomise extends Component {
  //Array holding the response from the api
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filterString: "",
      loading: true,
    };
  }

  //Fetch to get json string results
  componentDidMount() {
    const seed = "35300fbcf38bee1d";
    //
    fetch(`https://randomuser.me/api/?results=10&seed=${seed}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response.results, loading: false });
      });
  }

  render() {
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
                  <Filter
                    onTextChange={(text) =>
                      this.setState({ filterString: text })
                    }
                  />
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

        <div>
          {this.state.loading || !this.state.users ? (
            <div className="loading-center">Loading...</div>
          ) : (
            <div>
              <Container>
                <div className="padding-top-40">
                  {this.state.users
                    .filter((user) =>
                      user.name.first
                        .toLowerCase()
                        .includes(this.state.filterString.toLowerCase())
                    )
                    .map((user) => (
                      <div key={user.login.uuid} className="padding-bottom-20">
                        <Panel>
                          <span className="hidden">
                            {
                              (user.dob.date = moment(
                                `${user.dob.date}`
                              ).format("DD/MM/YYYY"))
                            }
                          </span>
                          <a
                            href={
                              "/Profile?userid=" +
                              user.login.uuid +
                              "&" +
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
                    ))}
                </div>
              </Container>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default Randomise;
