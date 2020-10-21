import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components";
import {
  Home,
  TransferHistory,
  TransferSearch,
  TransferAmount,
  TransferConfirmation,
  Topup,
  Profile,
  PersonalInfo,
  ManagePhone,
  Login,
  LandingPage,
  Notfound,
} from "./page";
import { Dashboard } from "./page/Adm1n";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import consfigureStore from "../src/redux/store";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Home} />
        <PrivateRoute exact path="/transfer" component={TransferSearch} />
        <PrivateRoute
          exact
          path="/transfer/amount"
          component={TransferAmount}
        />
        <PrivateRoute
          exact
          path="/transfer/confirmation"
          component={TransferConfirmation}
        />
        <PrivateRoute
          exact
          path="/transfer/history"
          component={TransferHistory}
        />
        <PrivateRoute
          exact
          path="/topup"
          component={Topup}
        />
        <PrivateRoute
          exact
          path="/profile"
          component={Profile}
        />
        <PrivateRoute
          exact
          path="/profile/personal-info"
          component={PersonalInfo}
        />
        <PrivateRoute
          exact
          path="/profile/personal-info/manage-phone"
          component={ManagePhone}
        />
        <PrivateRoute
          exact
          path="/dashboard-adm1n"
          restricted={false}
          component={Dashboard}
        />
        <PublicRoute exact path="/login" restricted={true} component={Login} />
        <PublicRoute
          exact
          path="/notfound"
          restricted={false}
          component={Notfound}
        />
        <PublicRoute
          exact
          path="/"
          component={LandingPage}
          restricted={false}
        />
      </Switch>
    </Router>
  );
};

const App = () => {
  const { store, persistor } = consfigureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
