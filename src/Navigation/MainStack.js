import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';

export default function MainStack(Stack) {
  return (
    /*********WRAPPING IN FRAGMENTS TO ADD MORE SCREENS IN FUTURE */
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
}
