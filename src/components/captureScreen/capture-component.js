import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RNCamera} from 'react-native-camera';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Icon} from 'react-native-elements';
import {WINDOW_SIZE} from '../../utils/scale';
import {FONT_SIZE} from '../../utils/fontsize';
import fruitScale from '../../images/scale.png';
import camCapBtn from '../../images/camCapBtn.png';

class CaptureComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUri: '',
    };
  }
  render() {
    if (this.state.imageUri) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <ImageBackground
            source={{uri: this.state.imageUri}}
            //source={fruitScale}
            style={{
              width: WINDOW_SIZE.WIDTH,
              height: WINDOW_SIZE.HEIGHT,
              flex: 1,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'column', flex: 1}}>
              <TouchableOpacity
                style={{position: 'absolute', bottom: 0}}
                onPress={() => {
                  this.setState({imageUri: ''});
                  this.props.navigation.navigate('CaptureScreen');
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    padding: 25,
                    paddingLeft: 30,
                    paddingRight: 30,
                    backgroundColor: 'black',
                    fontWeight: 'bold',
                    marginBottom: 50,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{position: 'absolute', bottom: 0, right: 0}}
                onPress={() => {
                  this.props.navigation.navigate('ResultScreen', {
                    scannedImage: this.state.imageUri,
                  });
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    padding: 25,
                    paddingLeft: 30,
                    paddingRight: 30,
                    backgroundColor: '#FEC000',
                    fontWeight: 'bold',
                    marginBottom: 50,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Image source={camCapBtn} style={{width: 50, height: 50}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({imageUri: data.uri});
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

function mapStateToProps(state) {
  return {};
}

function dispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  dispatchToProps,
)(CaptureComponent);
