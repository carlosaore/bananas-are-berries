import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Provider from "./context/Context";
import ApiProvider from "./context/ApiContext";
import GlobalStyle from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ApiProvider>
          <GlobalStyle />
          <App />
        </ApiProvider>
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
