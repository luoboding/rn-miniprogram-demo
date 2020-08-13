import React, {useCallback, useRef, useState, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressView} from '@react-native-community/progress-view';
import {WebView} from 'react-native-webview';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
// var ImagePicker = require('react-native-image-picker');




const html = `
<html>
<head>
  <title>拍照小程序</title>
</head>
<body>
  <button onClick="takePhoto()" style="width: 200px; height: 50px;">拍照</button>
  <script>
    function takePhoto() {
      window.ReactNativeWebView.postMessage("takePhoto");
    }
  </script>
</body>
</html>
`;

export default () => {
  const navigation = useNavigation(null);
  const webviewRef = useRef(null);
  const [leftIconVisible, setLeftIconVisible] = useState(false);
  const [title, setTitle] = useState('载入bundle...');
  const onHeaderRightPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const [progress, setProgress] = useState(0);

  const onNavigationStateChange = useCallback((navState) => {
    setTitle(navState.title);
    if (navState.canGoBack) {
      setLeftIconVisible(true);
    }
  }, []);

  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const onMessage = useCallback((evt) => {
    console.log('evt', evt.nativeEvent.data);
    const message = evt.nativeEvent.data;
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        });
      }
    });
  }, []);

  const Head = useMemo(() => {
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: title, style: { color: '#fff' } }}
        rightComponent={{ icon: 'close', color: '#fff', onPress: onHeaderRightPress }}
      />
    );
  }, [title, onHeaderRightPress]);
  return (
    <View style={[styles.container]}>
      {Head}
      {progress !== 1 && (
        <ProgressView progressTintColor="red" progress={progress} />
      )}
      <WebView
        originWhitelist={['*']}
        source={{ html }}
        ref={webviewRef}
        onLoadProgress={(event) => {
          setProgress(event.nativeEvent.progress);
        }}
        onMessage={onMessage}
        onNavigationStateChange={onNavigationStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
