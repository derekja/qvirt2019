import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainHeader from "./components/Header/MainHeader";
import Advisory from "./components/Advisory";
import Members from "./components/Members";
import Modals from "./components/Modals";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style/App.css";
import "./style/fontawesome-free/css/all.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curModal: "",
    };
  }

  // pass through methods so state management
  // remains at app level
  closeModal = () => {
    console.log("eviscerate");
    this.setState({
      curModal: "",
    });
  };
  showModal = (id) => {
    console.log(id);
    this.setState({
      curModal: id,
    });
  };

  render() {
    return (
      <div className="App">
        <Modals
          curModal={this.state.curModal}
          close={() => {
            this.closeModal();
          }}
        />
        <Navigation />
        <Header>
          <MainHeader />
        </Header>
        <Advisory />
        <Members showModal={this.showModal} />
        <Staff />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
