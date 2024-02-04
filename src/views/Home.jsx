import React from "react";
import { Container } from "react-bootstrap";
import MainHeader from "../components/home/MainHeader";
import Participate from "../components/home/Participate";
import IdeasHeader from "../components/home/IdeasHeader";
import Location from "../components/home/Location";
import Snippet from "../components/shared/Snippet";

const Home = () => {
  return (
    <Container fluid className="p-0">
      <Snippet pageName="Home" />
      <MainHeader />
      <Participate />
      <IdeasHeader />
      <Location />
    </Container>
  );
};

export default Home;
