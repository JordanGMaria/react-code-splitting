import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router";
// A importação com Lazy só é renderizada quando chamada
// O suspense é uma forma de rendizar um loading para espera do carregamento
const ComponentA = lazy(() => import("./ComponentA"));
const ComponentB = lazy(() => import("./ComponentB"));
const ComponentC = lazy(() => import("./ComponentC"));

const Routes = () => (
  <Switch>
    <Suspense fallback={<h1>Rendering...</h1>}>
      <Route exact path="/ComponentA" component={ComponentA} />
      <Route exact path="/ComponentB" component={ComponentB} />
      <Route exact path="/ComponentC" component={ComponentC} />
      <Route exact path="/">
        <Redirect to="/ComponentA" />
      </Route>
      <Route exact path="*">
        <Redirect to="/ComponentA" />
      </Route>
    </Suspense>
  </Switch>
);

export default Routes;
