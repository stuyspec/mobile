import React  from 'react';
import Expo from 'expo';
import { RoutingApp } from './modules';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(RoutingApp);