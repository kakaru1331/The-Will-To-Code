import React, { Component, ReactNode } from 'react';
import { Text, View } from 'react-native';

type Props = {
  name: ReactNode
}

class Greeting extends Component<Props> {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    )
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    )
  }
}
