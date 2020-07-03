import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Icon} from 'react-native-elements';
import {WINDOW_SIZE} from '../../utils/scale';
import {FONT_SIZE} from '../../utils/fontsize';
import fruitScale from '../../images/scan.png';
import scanBtn from '../../images/scanbtn.png';
import uploadBtn from '../../images/upload.png';

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {photo: null};
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  render() {
    if (this.state.photo) {
      this.props.navigation.navigate('ResultScreen', {
        scannedImage: this.state.photo.uri,
      });
    }
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          style={{
            width: WINDOW_SIZE.HEIGHT / 3,
            height: WINDOW_SIZE.HEIGHT / 3,
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 70,
            marginBottom: 50,
          }}
          source={fruitScale}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 30,
            color: '#6AEB91',
          }}>
          FRUIT LENS
        </Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Label and charge {'\n'} your fruits and vegetables
        </Text>
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{position: 'absolute', left: 0}}
            onPress={() => this.props.navigation.navigate('CaptureScreen')}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderWidth: 1,
                borderRadius: 20,
                marginTop: 20,
                marginBottom: 50,
                marginLeft: 30,
              }}
              source={scanBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={this.handleChoosePhoto}>
            <Image
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                borderRadius: 20,
                marginTop: 20,
                marginBottom: 50,
              }}
              source={uploadBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function dispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  dispatchToProps,
)(HomeComponent);
