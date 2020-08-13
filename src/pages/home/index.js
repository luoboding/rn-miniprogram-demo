import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header, Button} from 'react-native-elements';

export default () => {
  const navigation = useNavigation();

  const onLoadWeb = useCallback(() => {
    navigation.navigate('Web');
  }, [navigation]);

  const webproram = useCallback(() => {
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
      <View style={[styles.actionContainer]}>
        <Button
          title="web小程序"
          type="outline"
          onPress={webproram}
          containerStyle={styles.button}
        />
        <Button
          title="Web"
          type="solid"
          onPress={onLoadWeb}
          containerStyle={styles.button}
        />
        <Button
          title="rn小程序"
          type="outline"
          onPress={miniprogram}
          color="green"
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 100,
  },
});
