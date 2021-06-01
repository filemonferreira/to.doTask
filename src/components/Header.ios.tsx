import React,{useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

interface Props {
  toggleButton: (isEnabled: boolean) => void;
}

import { useThemeCli } from '../hooks/theme';
export function Header({toggleButton} : Props) {
  const { theme, handleThemeChange } = useThemeCli();
  

  function ToggleTheme(){
    
      handleThemeChange();
    
  }
  return (
    <SafeAreaView style={[styles.container, {backgroundColor:  theme === 'Dark' ? '#3E3E3E' : '#273FAD' }]}>
      <View style={[styles.header, {backgroundColor:  theme === 'Dark' ? '#3E3E3E' : '#273FAD'}]}>
        <Switch
        trackColor={{ false: "#e1e1e", true: "#ccc" }}
        thumbColor={theme === 'Light' ? "#fff" : "#000"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={ToggleTheme}
        value={theme === 'Light' ? false : true}
        style={{marginLeft: 10}}
      />
        
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>Task</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  header: {
    paddingBottom: 44,
    
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    marginLeft: 50,
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
    
  }
});
