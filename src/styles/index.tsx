import React from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './styles';

export interface StylesOptions {
    classes: Record<any, string>;
}

export const StylesContext = React.createContext<StylesOptions>({ classes: {} });

const StylesProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    const getClassNameMap = () => {
        return makeStyles(styles, {index: 1})();
    };

    return <StylesContext.Provider value={{ classes: getClassNameMap() }}>
        {props.children}
    </StylesContext.Provider>
}

export default StylesProvider;