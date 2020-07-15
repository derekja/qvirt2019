import React, { Component } from "react";
import MemberModal from "./MemberModal";
import members from "../Members/members.json";

const modals = [...members];
const Modals = (props) => (
  <div id="modals">
    {modals.map((value, index) => {
      return (
        <MemberModal
          key={index}
          {...value}
          {...props}
          show={props.curModal === value.id}
        />
      );
    })}
  </div>
);

export default Modals;
