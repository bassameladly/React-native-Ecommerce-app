import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import {Card} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class ItemDetails extends Component {
  renderProducts = products => {
    return products.map((item, id) => {
      return (
        <View style={{flex: 1, flexDirection: 'row'}} key={id}>
          <Card containerStyle={{backgroundColor: '#D3F1E3'}}>
            <View style={styles.leftCardView}>
              <Image
                source={{uri: item.image}}
                style={{width: 100, height: 120}}
              />
            </View>

            <View style={{flex: 2}}>
              <Text style={styles.text}>
                {item.name + '       ' + 'Price : $ ' + item.price}
              </Text>
              <Text>{item.desc}</Text>
            </View>
            <View style={styles.cardRightView}>
              <Button
                onPress={() => this.props.onPress(item)}
                title="Add to Cart"
                color="#F59D92"
              />
            </View>
          </Card>
        </View>
      );
    });
  };
  render() {
    return <View style={{alignSelf: 'center'}}>{this.renderProducts}</View>;
  }
}
const styles = StyleSheet.create({
  leftCardView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'red',
    margin: 5,
    padding: 10,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  cardRightView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
  },
});

export default withNavigation(ItemDetails);
