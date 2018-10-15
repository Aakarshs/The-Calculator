import React from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,

  Image,

  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export class MyCarousel extends React.Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
}