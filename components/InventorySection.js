import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InventorySection({ themeStyles, isDarkModeEnabled }) {
  return (
    <View style={themeStyles.section}>
      <TouchableOpacity style={themeStyles.row}>
        <Ionicons name="people-outline" size={24} color={isDarkModeEnabled ? 'white' : 'black'} />
        <Text style={themeStyles.rowText}>Follow Requests</Text>
        <Text style={themeStyles.storeCount}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={themeStyles.row}>
        <Ionicons name="settings-outline" size={24} color={isDarkModeEnabled ? 'white' : 'black'} />
        <Text style={themeStyles.rowText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
