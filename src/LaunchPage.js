import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { ScreenOrientation } from 'expo';

import { Header } from 'react-native-elements'


import Listview from './components/Listview';
import Tabs from './components/Tabs';

export default class LaunchPage extends Component {
    componentDidMount() {
        ScreenOrientation.unlockAsync()
    }
    render() {
        return (
            <View style={styles.container} {...this.props}>
                <Header
                    placement="center"
                    centerComponent={{ text: 'Carsome RN', style: { color: '#fff', fontSize: 20 } }}
                />
                <Tabs style={styles.tabs} />
                <Listview />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabs: {
        height: 80
    }
});



