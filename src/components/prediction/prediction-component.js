import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Icon} from 'react-native-elements';
import {WINDOW_SIZE} from '../../utils/scale';
import {FONT_SIZE} from '../../utils/fontsize';
import fruitScale from '../../images/pineapple.jpg';
import scanBtn from '../../images/scanbtn.png';
import uploadBtn from '../../images/upload.png';

class PredictionComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', margin: 30}}>
          Top 3 Results
        </Text>
        <TouchableOpacity
          style={{flex: 0.5, flexDirection: 'row', marginLeft: 50}}>
          <Image style={{height: 100, width: 100}} source={fruitScale} />
          <Text style={{fontSize: 20, marginLeft: 50, marginTop: 40}}>
            Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex: 0.5, flexDirection: 'row', marginLeft: 50}}>
          <Image style={{height: 100, width: 100}} source={fruitScale} />
          <Text style={{fontSize: 20, marginLeft: 50, marginTop: 40}}>
            Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex: 0.5, flexDirection: 'row', marginLeft: 50}}>
          <Image style={{height: 100, width: 100}} source={fruitScale} />
          <Text style={{fontSize: 20, marginLeft: 50, marginTop: 40}}>
            Apple
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
)(PredictionComponent);
