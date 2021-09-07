import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { About } from './About';
import { Home } from './Home';
import './ProductApp.css';
import { ProductsBody } from './ProductsBody';

const menuItems = [{path: '/', name: "Home", component: () => <Home />}, 
                {path: '/About', name: "About", component: () => <About />}, 
                {path: '/Products', name: "Products", component: () =>  <ProductsBody />}];

const ProductsApp: React.FC = () => {
    return <Router>
        <ul>
            {menuItems.map((i, index) => <li key={index} className={'menu'}>
                <Link className={'link'} to={i.path}>{i.name}</Link>
            </li>)}
        </ul>        
        {menuItems.map((i, index) => 
            <Route key={index} exact 
                path={i.path} 
                component={i.component} />)}        
    </Router>
}

export default ProductsApp;

