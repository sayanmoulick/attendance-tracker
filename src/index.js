import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { store } from "./store/store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   </StrictMode>,
);
