import { Platform } from 'react-native';

export default {
  primary: Platform.select({
    ios: 'Helvetica',
    android: 'Roboto',
  }),
  secondary: 'Arial',
};
