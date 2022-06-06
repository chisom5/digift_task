import { lazy, Suspense, Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { Result, Button } from "antd";
import LoadingMessage from "../components/lazyLoader";
import './app.scss';

// components
const PersonalPage = lazy(() => import("../views/personalPage"));
const BusinessPage = lazy(() => import("../views/businessPage"));

const FourZeroFour = () => (
  <div className="errorpg_bg">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route exact path="/" component={PersonalPage} />
            <Route exact path="/business_page" component={BusinessPage} />
            <Route path="*" component={FourZeroFour} />
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}
export default App;
