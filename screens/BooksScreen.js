import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {books} from '../data/data';
import ProductsItem from '../components/ProductsItem';
import {connect} from 'react-redux';

class BooksScreen extends Component {
  render() {
    return (
      <ScrollView>
        <ProductsItem products={books} onPress={this.props.addItemToCart} />
      </ScrollView>
    );
  }
}
BooksScreen.navigationOptions = {
  headerTitle: 'Books',
};
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({type: 'ADD_TO_CART', payload: product}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(BooksScreen);
