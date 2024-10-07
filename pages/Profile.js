import React, { useState, useEffect } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import InventorySection from '../components/InventorySection';
import PreferencesSection from '../components/PreferencesSection';
import LogoutSection from '../components/LogoutSection';

export default function Profile() {
  const [isPushEnabled, setIsPushEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const togglePushSwitch = () => setIsPushEnabled(prevState => !prevState);

  const toggleDarkModeSwitch = () => {
    setIsDarkModeEnabled(prevState => {
      const newMode = !prevState;
      console.log('Dark mode toggled:', newMode); 
      return newMode;
    });
  };

  const themeStyles = isDarkModeEnabled ? darkStyles : lightStyles;

 
  useEffect(() => {
    StatusBar.setBarStyle(isDarkModeEnabled ? 'light-content' : 'dark-content', true);
  }, [isDarkModeEnabled]);

  return (
    <View style={themeStyles.container}>
      <StatusBar
        backgroundColor={isDarkModeEnabled ? '#000' : '#fff'}
        barStyle={isDarkModeEnabled ? 'light-content' : 'dark-content'}
      />
      <ProfileHeader themeStyles={themeStyles} />
      <InventorySection themeStyles={themeStyles} isDarkModeEnabled={isDarkModeEnabled} />
      <PreferencesSection
        themeStyles={themeStyles}
        isDarkModeEnabled={isDarkModeEnabled}
        isPushEnabled={isPushEnabled}
        togglePushSwitch={togglePushSwitch}
        toggleDarkModeSwitch={toggleDarkModeSwitch}
      />
      <LogoutSection themeStyles={themeStyles} />
    </View>
  );
}

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

export { lightStyles, darkStyles };
