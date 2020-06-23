import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';

class CartItem extends Component {
  renderProducts = products => {
    return products.map((item, index) => {
      return (
        <View style={{flex: 1, borderWidth: 0.3}} key={index}>
          <Card containerStyle={{backgroundColor: '#D3F1E3'}}>
            <View style={styles.leftCardView}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Details', {product: item})
                }>
                <Image
                  source={{uri: item.image}}
                  style={{width: 110, height: 130}}
                />
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                }}>
                <Text style={styles.text}>Name : {item.name}</Text>
                <Text style={styles.text}>Price : {item.price}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text>Qty: </Text>
                  <TouchableOpacity onPress={()=> this.props.onAddQuantity(item)}>
                    <Icon name="triangle-up" size={30} />
                  </TouchableOpacity>
                  <Text style={{fontSize: 15}}>{item.quantity}</Text>
                  <TouchableOpacity>
                    <Icon name="triangle-down" size={30} />
                  </TouchableOpacity>
                </View>
                <View style={{padding: 10}}>
                  <TouchableOpacity>
                    <Button
                      onPress={() => this.props.onPress(item, index)}
                      title="Remove"
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              </View>
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
    justifyContent: 'space-between',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    width: 330,
    height: 150,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  cardRightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
    margin: 5,
  },
});

export default withNavigation(CartItem);
