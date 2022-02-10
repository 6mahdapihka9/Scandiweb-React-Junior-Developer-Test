import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
//Redux
import {Provider} from 'react-redux';
import store from './redux/redux.store.js';
//GraphQL
import {ApolloProvider} from "@apollo/client";
import {client} from "./helpers/apollo.client";
//Router
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
