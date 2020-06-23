import React, {Component} from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import CartItem from '../components/CartItem';
import {connect} from 'react-redux';

class CartScreen extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, margin: 20}}>
        {this.props.cartItems.length > 0 ? (
          <CartItem
            products={this.props.cartItems}
            onPress={this.props.removeItem}
            onAddQuantity={this.props.adddQuantity}
          />
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
            }}>
            <Text style={{margin: 20}}>No item in your cart</Text>
            <Button
              title="Shop Now"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        )}
      </ScrollView>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    removeItem: (product, index) =>
      dispatch({type: 'REMOVE_FROM_CART', payload: {...product, index}}),
  };
};

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartScreen);
