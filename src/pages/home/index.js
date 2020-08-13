import React, {useCallback} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';

export default () => {
  const navigation = useNavigation();

  const onLoadWeb = useCallback(() => {
    navigation.navigate('Web');
  }, [navigation]);

  const onShoot = useCallback(() => {
    navigation.navigate('Shoot');
  }, [navigation]);

  const miniprogram = useCallback(() => {
    navigation.navigate('Miniprogram');
  }, [navigation]);

  return (
    <View style={[styles.container]}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: '主页', style: { color: '#fff' } }}
        // rightComponent={{ icon: 'close', color: '#fff' }}
      />
      <View>
        <Button title="Web" onPress={onLoadWeb} />
        <Button title="rn小程序" onPress={miniprogram} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
