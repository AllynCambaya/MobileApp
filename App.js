import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [isPushEnabled, setIsPushEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);  // State to handle dark mode

  const togglePushSwitch = () => setIsPushEnabled(previousState => !previousState);
  const toggleDarkModeSwitch = () => {
    setIsDarkModeEnabled(previousState => !previousState);
    console.log('Dark mode toggled:', !isDarkModeEnabled); // Debug log
  };

  // Choose theme styles dynamically based on the dark mode state
  const themeStyles = isDarkModeEnabled ? darkStyles : lightStyles;

  return (
    <View style={themeStyles.container}>
      {/* Status Bar */}
      <StatusBar style={isDarkModeEnabled ? 'light' : 'dark'} 
      backgroundColor={isDarkModeEnabled ? '#000' : '#fff'} 
      />
      

      {/* Profile Section */}
      <View style={themeStyles.profileContainer}>
        <Image 
          source={require('./assets/profile.jpg')} 
          style={themeStyles.profileImage} 
        />
        <Text style={themeStyles.profileName}>Allyn Cambaya</Text>
        <Text style={themeStyles.profileEmail}>allyncambaya2003@gmail.com</Text>
        <TouchableOpacity style={themeStyles.editButton}>
          <Text style={themeStyles.editButtonText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      {/* Inventory Section */}
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

      {/* Preferences Section */}
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

      {/* Logout Section */}
      <TouchableOpacity style={themeStyles.logoutButton}>
        <Text style={themeStyles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

// Light theme styles
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     paddingTop: 70,
    padding: 20,
    
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginVertical: 30,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  rowText: {
    fontSize: 16,
    marginLeft: 15,  
    flex: 1,         
    color: 'black',
  },
  storeCount: {
    backgroundColor: '#34C759',
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
  },
});

// Dark theme styles
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 70,
    padding: 20,
    
    
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  profileEmail: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#000',
    fontSize: 16,
  },
  section: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginVertical: 30,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#555',
    borderBottomWidth: 1,
  },
  rowText: {
    fontSize: 16,
    marginLeft: 15,  
    flex: 1,         
    color: 'white',
  },
  storeCount: {
    backgroundColor: '#34C759',
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
  },
});
