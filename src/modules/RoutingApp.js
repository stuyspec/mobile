import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import { HomePage } from './core/components';

const RoutingApp = () => {
  return (
    <Router>
      <Stack
        hideNavBar
        key="root"
      >
        <Scene key="HomePage" component={HomePage} />
      </Stack>
    </Router>
  )
};

export default RoutingApp;