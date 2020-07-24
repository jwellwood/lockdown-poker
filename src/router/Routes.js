import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from '../pages/home';
import Navbar from '../ui/navigation/Navbar.component';
import PlayersPage from '../pages/players';
import GamesPage from '../pages/games';
import SignInPage from '../pages/sign_in';
import AddPlayerPage from '../pages/add_player';
import AddGamePage from '../pages/add_game';
import AddGameDetailsPage from '../pages/add_game_details';
import * as routes from '.';
import GamePage from '../pages/game';
import PlayerPage from '../pages/player';
import EditPlayerPage from '../pages/edit_player';
import EditGamePage from '../pages/edit_game';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.PLAYERS} component={PlayersPage} />
        <Route exact path={routes.ADD_PLAYER} component={AddPlayerPage} />
        <Route exact path={routes.PLAYER} component={PlayerPage} />
        <Route exact path={routes.EDIT_PLAYER} component={EditPlayerPage} />
        <Route exact path={routes.GAMES} component={GamesPage} />
        <Route exact path={routes.ADD_GAME} component={AddGamePage} />
        <Route exact path={routes.GAME} component={GamePage} />
        <Route exact path={routes.EDIT_GAME} component={EditGamePage} />
        <Route exact path={routes.SIGN_IN} component={SignInPage} />
        <Route
          exact
          path={routes.ADD_GAME_DETAILS}
          component={AddGameDetailsPage}
        />
        <Redirect path='*' to={routes.HOME} />
      </Switch>
    </Router>
  );
};

export default Routes;
