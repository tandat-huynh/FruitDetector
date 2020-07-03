import {createStackNavigator} from 'react-navigation-stack';
import getSlideFromRightTransitionConfig from '../utils/transitionConfig';
import HomeComponent from '../components/home/home-component';
import CaptureComponent from '../components/captureScreen/capture-component';
import ResultComponent from '../components/resultScreen/result-component';
import PredictionComponent from '../components/prediction/prediction-component';
import InputQuantityComponent from '../components/InputQuantity/InputQuantity';

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeComponent,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },

    CaptureScreen: {
      screen: CaptureComponent,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    ResultScreen: {
      screen: ResultComponent,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },

    PredictionScreen: {
      screen: PredictionComponent,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },

    InputQuantityScreen: {
      screen: InputQuantityComponent,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },

  {
    initialRouteName: 'InputQuantityScreen',
    headerMode: 'none',
    mode: 'modal',
    transitionConfig: getSlideFromRightTransitionConfig,
  },
);

export default RootNavigator;
