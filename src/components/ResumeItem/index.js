import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTittle>{title}</C.HeaderTittle>
        <C.Total>{value}</C.Total>
      </C.Header>
    </C.Container>
  );
};

export default ResumeItem;
