import React, {Component} from 'react';
import {ScrollView, Text, Button} from 'react-native';
import {electronics} from '../data/data';
import ProductsItem from '../components/ProductsItem';
import {connect} from 'react-redux';

class ElectronicsScreen extends Component {
  render() {
    return (
      <ScrollView>
        <ProductsItem
          products={electronics}
          onPress={this.props.addItemToCart}
        />
      </ScrollView>
    );
  }
}
ElectronicsScreen.navigationOptions = {
  headerTitle: 'Electronics',
};
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({type: 'ADD_TO_CART', payload: product}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ElectronicsScreen);
