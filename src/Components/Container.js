import React from "react";
import ParentsContext from "../ParentsContext";

const Container = () => {
  return (
    <ParentsContext.Consumer>
      {state => {
        const { primaryColor, secondaryColor, backgroundColor } = state.themes[
          state.activeTheme
        ];
        return (
          <div>
            <div
              style={{
                backgroundColor: backgroundColor,
                color: primaryColor,
                padding: 10,
                margin: 20
              }}
            >
              Deep in children
            </div>
          </div>
        );
      }}
    </ParentsContext.Consumer>
  );
};

export default Container;
