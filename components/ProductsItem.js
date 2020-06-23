import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

class ProductsItem extends Component {
  renderProducts = products => {
    return products.map((item, id) => {
      return (
        <View style={{flex: 1}} key={id}>
          <Card
            containerStyle={{
              backgroundColor: 'white',
              flex: 1,
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Details', {product: item})
              }>
              <View style={styles.leftCardView}>
                <Image
                  source={{uri: item.image}}
                  style={{width: 100, height: 120}}
                />
                
              </View>
            </TouchableOpacity>
            <View style={styles.cardRightView}>
              <TouchableOpacity>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate('Details', {product: item})
                  }
                  title="Details"
                  color="#1FAE0B"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Button
                  onPress={() => this.props.onPress(item)}
                  title="Add to Cart"
                  color="#1FAE0B"
                />
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      );
    });
  };
  render() {
    return (
      <View style={{alignSelf: 'center'}}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  leftCardView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    borderWidth: 0.3,
    width: 320,
    height: 150,
  },
  text: {
    fontSize: 14,
  },
  cardRightView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
  },
});

export default withNavigation(ProductsItem);
