import { Form } from "@unform/web";
import React from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { MainContent } from "./styles";

const Home = () => {
  return (
    <MainContent>
      <Form
        onSubmit={() => {
          console.log("Voce clicou no form");
        }}
      >
        <Input name="name" />
        <Button buttonType="submit" label="PRESS START" />
      </Form>
    </MainContent>
  );
};

export default Home;
