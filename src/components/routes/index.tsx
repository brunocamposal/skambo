import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routesNotAuth } from "./helper";
import Layout from "../layout";

const Routes = () => {
  const routesRender = routesNotAuth;

  return (
    <Switch>
      {routesRender.map((item, index) => (
        <Route key={index} exact path={item.path}>
          {item.path === "/login" || item.path === "/register" ? (
            <item.page />
          ) : (
            <Layout>
              <item.page />
            </Layout>
          )}
        </Route>
      ))}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
