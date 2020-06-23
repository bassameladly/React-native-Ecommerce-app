import React, {Component} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Card} from 'react-native-elements';

class DetailsScreen extends Component {
  render() {
    const product = this.props.navigation.getParam('product');
    return (
      <View style={styles.constainer}>
        <Card
          containerStyle={{
            backgroundColor: 'white',
            flexDirection: 'row',
            flex: 1,
          }}>
          <View style={styles.image}>
            <Image
              source={{uri: product.image}}
              style={{
                width: 110,
                height: 125,
                alignSelf: 'center',
              }}
            />
          </View>
          <Text style={styles.text}> Producs Descreption :</Text>
          <View style={styles.descView}>
            <Text style={styles.text}>{product.desc}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Product Name : {product.name}</Text>
            <Text style={styles.text}>Number of Stock : {product.stock}</Text>

            <Text style={styles.text}>Price : {product.price} $</Text>
            <TouchableOpacity>
              <Button
                title="Add To Cart"
                onPress={() => this.props.addItemToCart(product)}
                color="#1FAE0B"
              />
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({type: 'ADD_TO_CART', payload: product}),
  };
};
const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};
const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    flex: 1,
    borderWidth: 0.3,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
  descView: {
    marginBottom: 10,
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  contentContainer: {
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsScreen);
