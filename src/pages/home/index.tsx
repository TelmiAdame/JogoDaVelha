import React from "react";
import { FiUser } from "react-icons/fi";
import { Form } from "@unform/web";
import Button from "../../components/button";
import Input from "../../components/input";
import { MainContent } from "./styles";
import logo from "../../assets/tictactoeimage.png";

const Home = () => {
  return (
    <MainContent>
      <Form
        onSubmit={() => {
          console.log("Voce clicou no form");
        }}
      >
        <img src={logo} alt="Logo fofinha" />
        <Input name="name" icon={FiUser} placeholder="Insira seu nome" />
        <Button buttonType="submit" label="START" />
        <small>
          Powered By <code>PRESS START</code>
        </small>
      </Form>
    </MainContent>
  );
};

export default Home;
