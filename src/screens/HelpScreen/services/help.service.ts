import { Linking } from 'react-native';

export const handleDownload = () => {
  Linking.openURL('https://play.google.com/store/apps/details?id=br.com.mottu');
};
