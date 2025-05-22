import React, { useEffect, useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LogoutScreen = () => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const doLogout = async () => {
      await logout();
    };
    doLogout();
  }, [logout]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LogoutScreen;
