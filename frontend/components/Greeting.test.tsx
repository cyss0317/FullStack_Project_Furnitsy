import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Greeting from "./Greeting";
import { logout } from "../actions/session_actions";
import { openModal } from "../actions/modal_actions";

describe("Greeting", () => {
  it("renders correctly", () => {
    const user = {
      id: "1",
      email: "demo@yahoo.com",
      session_token: "1234",
      password_digest: "1234",
      first_name: "Demo",
    } 
    render(<Greeting currentUser={user} logout={logout} openModal={openModal} horizontal={true} />);
    expect(screen.getByText("Welcome, Demo")).toBeInTheDocument();
  })
})
