/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import WelcomeScreen from './src/screen/WelcomeScreen';

Navigation.registerComponent(`WelcomeScreen`, () => WelcomeScreen);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'WelcomeScreen'
//       }
//     }
//   });
// });

Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'FirstTabScreen',
              passProps: {
                text: 'This is tab 1'
              }
            }
          }],
          options: {
            bottomTab: {
              title: 'Tab 1',
              icon: require('../images/one.png'),
              testID: 'FIRST_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'navigation.playground.TextScreen',
          passProps: {
            text: 'This is tab 2'
          },
          options: {
            bottomTab: {
              title: 'Tab 2',
              icon: require('../images/two.png'),
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      }]
    }
  }
});