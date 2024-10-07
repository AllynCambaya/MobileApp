// ProfileHeader.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileHeader({ themeStyles }) {
  return (
    <View style={themeStyles.profileContainer}>
      <Image source={require('../assets/profile.jpg')} style={themeStyles.profileImage} />
      <Text style={themeStyles.profileName}>Allyn Cambaya</Text>
      <Text style={themeStyles.profileEmail}>allyncambaya2003@gmail.com</Text>
      <TouchableOpacity style={themeStyles.editButton}>
        <Text style={themeStyles.editButtonText}>Edit profile</Text>
      </TouchableOpacity>
    </View>
  );
}
