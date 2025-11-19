import * as React from 'react';

import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export function navigateReset(routes: {name: string; params?: object}[], index = 0) {
  navigationRef.current?.reset({
    index,
    routes,
  });
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute()?.name || null;
}
