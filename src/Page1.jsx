import { Link, Switch, Route } from "react-router-dom";

import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです。</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <Switch>
        <Route path="/page1/detailA">
          <Page1DetailA />
        </Route>
        <Route path="/page1/detailB">
          <Page1DetailB />
        </Route>
      </Switch>
    </div>
  );
};
