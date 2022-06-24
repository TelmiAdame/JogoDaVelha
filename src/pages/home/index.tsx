import { Form } from "@unform/web";
import React from "react";
import { FiUser } from "react-icons/fi";
import Button from "../../components/button";
import Input from "../../components/input";
import { MainContent } from "./styles";
import Logo from "../../assets/tictactoeimage.png";

const Home = () => {
  return (
    <MainContent>
      <Form
        onSubmit={() => {
          console.log("Voce clicou no form");
        }}
      >
        <img src={Logo} alt="Logo" />
        <Input name="name" icon={FiUser} placeholder="Insira seu nome" />
        <Button buttonType="submit" label="START" />
        <small>
          Powered by <code>PRESS START</code>
        </small>
      </Form>
    </MainContent>
  );
};

export default Home;
