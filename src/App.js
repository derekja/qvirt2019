import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainHeader from "./components/Header/MainHeader";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Modals from "./components/Modals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style/App.css";
import "./style/fontawesome-free/css/all.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curModal: ""
    };
  }
  closeModal = () => {
    console.log("eviscerate");
    this.setState({
      curModal: ""
    });
  };
  showModal = id => {
    console.log(id);
    this.setState({
      curModal: id
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
        <Tech />
        <Projects showModal={this.showModal} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
