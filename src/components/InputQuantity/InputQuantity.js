import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
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

class InputQuantityComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myNumber: 0,
    };
  }
    onTextChanged(text) {
    // code to remove non-numeric characters from text
    this.setState({myNumber: text});
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', margin: 30}}>
          Enter the quantity:
        </Text>

        <TextInput
          style={{marginLeft: 50, marginRight: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
          keyboardType="numeric"
          placeholder="Enter the number here..."
          onChangeText={text => this.onTextChanged(text)}
          value={this.state.myNumber}
        />

        <TouchableOpacity style={{}}>
            <Text style={{margin: 50, backgroundColor: 'green', borderRadius: 5, borderWidth: 1, padding: 10}}>OK</Text>
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
)(InputQuantityComponent);
