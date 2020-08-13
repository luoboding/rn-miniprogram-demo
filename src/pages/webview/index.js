import React, {useCallback, useRef, useState, useMemo} from 'react';
import {StyleSheet, View, Platform, ProgressBarAndroid } from 'react-native';
import { ProgressView } from '@react-native-community/progress-view'
import {WebView} from 'react-native-webview';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation(null);
  const webviewRef = useRef(null);
  const [leftIconVisible, setLeftIconVisible] = useState(false);
  const [title, setTitle] = useState('');
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
        Platform.OS === 'ios'
        ? <ProgressView progressTintColor="red" progress={progress} />
        : <ProgressBarAndroid progressTintColor="red" progress={progress} />
      )}
      <WebView
        originWhitelist={['*']}
        source={{uri: 'https://www.baidu.com'}}
        ref={webviewRef}
        onLoadProgress={(event) => {
          setProgress(event.nativeEvent.progress);
        }}
        onNavigationStateChange={onNavigationStateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
