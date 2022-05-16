import React from "react";
import Main from "../Main";
import Row from "../Row";
import Requests from "../../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId="1" title="Up Coming" fetchURL={Requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchURL={Requests.requestPopular} />
      <Row rowId="3" title="Top Rated" fetchURL={Requests.requestTopRated} />
      <Row rowId="4" title="Latest Shows" fetchURL={Requests.requestLatest} />
      <Row
        rowId="5"
        title="Now Playing"
        fetchURL={Requests.requestNowplaying}
      />
    </div>
  );
};

export default Home;
