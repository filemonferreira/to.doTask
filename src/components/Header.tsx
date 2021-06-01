import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';





export function Header() {
  return (
    <View style={styles.header}>
      <Switch />
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  }
});
