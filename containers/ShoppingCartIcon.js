import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const ShoppingCartIcon = props => {
  return (
    <View style={{padding: 5}}>
      <View
        style={{
          position: 'absolute',
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: 'white',
          right: 12,
          bottom: -5,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            bottom: -6,
          }}>
          {props.CartItems.length}
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon name="ios-cart" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    CartItems: state,
  };
};
export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));
