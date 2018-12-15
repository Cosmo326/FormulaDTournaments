import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Tournament from './components/Tournament';
import Race from './components/Race';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {far} from '@fortawesome/pro-regular-svg-icons';

library.add(fal, fas, far);

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/Home' component={Home} />
    <Route path='/Tournament' component={Tournament} />
    <Route path='/Race' component={Race} />
  </Layout>
);
