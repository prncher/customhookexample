import React, { Profiler, ProfilerOnRenderCallback } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './ProductApp.css';
import { About} from './About';
import { Home } from './Home';
import { ProductsBody } from './ProductsBody';

const menuItems = [{ path: '/', name: "Home", component: () => <Home /> },
{ path: '/About', name: "About", component: () => <About /> },
{ path: '/Products', name: "Products", component: () => <ProductsBody /> }];

const ProductsApp: React.FC = () => {
    const onRenderCallback: ProfilerOnRenderCallback = (
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) => {
        // Aggregate or log render timings...
        const log = {
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
            interactions
        };
        console.log({...log});
    }

    return <Router>
        <ul>
            {menuItems.map((i, index) => <li key={index} className={'menu'}>
                <Link className={'link'} to={i.path}>{i.name}</Link>
            </li>)}
        </ul>
        {menuItems.map((i, index) =>
            <Profiler key={index} id={i.name} onRender={onRenderCallback}>
                <Route exact
                    path={i.path}
                    component={i.component} />
            </Profiler>)}
    </Router>
}

export default ProductsApp;

