import * as React from "react"
import ReactDOM from "react-dom"
import {transitions, positions, Provider as AlertProvider } from 'react-alert'
import {Root} from "./Main/Root";
import {AlertTemplate} from "./Shared/Components/Alert/AlertTemplate";

const options = {
    position: positions.TOP_CENTER,
    timeout: 3000,
    offset: '0',
    transition: transitions.SCALE
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Root />
  </AlertProvider>,
  document.getElementById("root")
);
