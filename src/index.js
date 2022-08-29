import 'antd/dist/antd.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../src/redux/store';
import App from './App';
import './styles/styles.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
 
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
