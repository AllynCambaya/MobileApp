import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PreferencesSection({ themeStyles, isDarkModeEnabled, isPushEnabled, togglePushSwitch, toggleDarkModeSwitch }) {
  return (
    <View style={themeStyles.section}>
      <View style={themeStyles.row}>
        <Ionicons name="notifications-outline" size={24} color={isDarkModeEnabled ? 'white' : 'black'} />
        <Text style={themeStyles.rowText}>Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={isPushEnabled ? '#fff' : '#f4f3f4'}
          onValueChange={togglePushSwitch}
          value={isPushEnabled}
        />
      </View>
      <View style={themeStyles.row}>
        <Ionicons name="moon-outline" size={24} color={isDarkModeEnabled ? 'white' : 'black'} />
        <Text style={themeStyles.rowText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={isDarkModeEnabled ? '#fff' : '#f4f3f4'}
          onValueChange={toggleDarkModeSwitch}
          value={isDarkModeEnabled}
        />
      </View>
      <TouchableOpacity style={themeStyles.row}>
        <Ionicons name="lock-closed-outline" size={24} color={isDarkModeEnabled ? 'white' : 'black'} />
        <Text style={themeStyles.rowText}>PIN Code</Text>
      </TouchableOpacity>
    </View>
  );
}
