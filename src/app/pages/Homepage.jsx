import React, { useState } from "react";
import Header from "Components/Header/Header";
import GetUsersF from "Components/GetUsersF/GetUsersF";

const Homepage = () => (
  <>
    <Header />
    <GetUsersF />
  </>
);

export default Homepage;

export { Homepage };
