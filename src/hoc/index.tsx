import React from "react";
import StylesProvider from "../styles";

export const withAppliedStyles = (Comp: React.FunctionComponent) => {
    return (<StylesProvider><Comp /></StylesProvider>)
}