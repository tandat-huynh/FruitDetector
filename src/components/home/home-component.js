import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Icon} from 'react-native-elements';
import {WINDOW_SIZE} from '../../utils/scale';
import {FONT_SIZE} from '../../utils/fontsize';
import fruitScale from '../../images/scan.png';
import scanBtn from '../../images/scanbtn.png';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <Text style={{fontSize: 20, textAlign: 'center',}}>
          Label and charge {'\n'} your fruits and vegetables
        </Text>
        <TouchableOpacity
          style={{alignSelf: 'center', position: 'absolute', bottom: 0}}
          onPress={() => this.props.navigation.navigate('CaptureScreen')}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 20,
              marginTop: 20,
              marginBottom: 50,
            }}
            source={scanBtn}
          />
        </TouchableOpacity>
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
