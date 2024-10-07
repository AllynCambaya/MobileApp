import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function LogoutSection({ themeStyles }) {
  return (
    <TouchableOpacity style={themeStyles.logoutButton}>
      <Text style={themeStyles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
}
