import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CardView from 'react-native-cardview';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Icon} from 'react-native-elements';
import {WINDOW_SIZE} from '../../utils/scale';
import {FONT_SIZE} from '../../utils/fontsize';
import Pineapple from '../../images/pineapple.jpg';

class ResultComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUri: this.props.navigation.getParam('scannedImage'),
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FEC000',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: WINDOW_SIZE.HEIGHT / 2.5,
            height: WINDOW_SIZE.HEIGHT / 2.5,
            marginTop: 20,
            marginBottom: WINDOW_SIZE.HEIGHT / 20,
            alignItems: 'center',
            borderWidth: 5,
            borderRadius: 5,
            borderColor: 'orange',
          }}
          source={{uri: this.state.imageUri}}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            fontSize: 40,
          }}>
          {'Pineapple'.toUpperCase()}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 10,
            marginBottom: 10,
          }}>
          {/*View to wrap multiple text*/}
          <Text style={{fontSize: 30, lineHeight: 50, fontWeight: 'bold'}}>
            15 000
          </Text>
          <Text style={{fontSize: 15, lineHeight: 30}}> VND </Text>
          <Text
            style={{fontSize: 25, lineHeight: 50, textAlignVertical: 'center'}}>
            {' '}
            /
          </Text>
          <Text
            style={{fontSize: 20, lineHeight: 50, textAlignVertical: 'center'}}>
            {' '}
            1kg
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            marginLeft: 50,
            marginRight: 50,
            textAlign: 'justify',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
          }}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
              backgroundColor: 'white',
              padding: 20,
              paddingLeft: 70,
              paddingRight: 70,
              marginBottom: 20,
              borderRadius: 5,
            }}>
            SCAN ANOTHER
          </Text>
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
)(ResultComponent);
