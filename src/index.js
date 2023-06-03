import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// ReactDOM.render(

//       <App />,

//     document.getElementById('root')
// )

//Domain
//dev-tzcg6t2omgvluxty.eu.auth0.com

//Client ID
//11FLK4HBO8U1CaUrPlHjQRiZ06VozZFy

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain='dev-tzcg6t2omgvluxty.eu.auth0.com'
    clientId='11FLK4HBO8U1CaUrPlHjQRiZ06VozZFy'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
