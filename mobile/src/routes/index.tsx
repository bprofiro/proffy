import React, { useContext } from 'react';
import AuthRoutes from './AuthRoutes ';
import { useAuth } from '../contexts/auth';
import AppRoutes from './AppRoutes';
import { View, ActivityIndicator } from 'react-native';

const Routes: React.FC = () => {
    const { signed , loading} = useAuth();

    
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#666" />
        </View>
      );
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;
  };
  
export default Routes;