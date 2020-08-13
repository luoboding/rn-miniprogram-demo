import React, {useMemo, useCallback, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {ProgressView} from '@react-native-community/progress-view';
import ImagePicker from 'react-native-image-picker';

// const MiniLoader = requireNativeComponent('Boostrap');

const statusMap = {
  0: '载入bundle...',
  1: '启动中',
};

const options = {
  title: '拍照',
  customButtons: [{name: 'fb', title: '选择图片'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default () => {
  const navigation = useNavigation(null);
  const onHeaderRightPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(0);
  const [url, setUrl] = useState('');

  const Head = useMemo(() => {
    return (
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: '拍照小程序', style: {color: '#fff'}}}
        rightComponent={{
          icon: 'close',
          color: '#fff',
          onPress: onHeaderRightPress,
        }}
      />
    );
  }, [onHeaderRightPress]);
  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setProgress(0.5);
      setStatus(0);
    }, 300);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setProgress(0.7);
      setStatus(1);
    }, 500);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setProgress(1);
    }, 800);
  }, []);

  const openCamera = useCallback(() => {
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('source', source);
        setUrl(response.uri);
      }
    });
  }, []);

  return (
    <View style={[styles.container]}>
      {Head}
      {progress !== 1 && (
        <ProgressView progressTintColor="red" progress={progress} />
      )}
      <View style={[styles.actionContainer]}>
        {progress !== 1 ? (
          <Text>{statusMap[status]}</Text>
        ) : (
          <Button style={[styles.button]} onPress={openCamera} title="拍照" />
        )}
        {url.length > 0 && <Image source={{uri: url}} style={[styles.image]} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    width: 200,
  },
  image: {
    width: 200,
    marginTop: 20,
    height: 100,
  },
});
