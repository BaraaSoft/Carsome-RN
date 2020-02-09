import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



class Itemview extends Component {


    componentDidMount() {

    }

    render() {
        const { thumbnailUrl, title, id } = this.props.data;
        return (
            <View style={styles.container} key={id} >
                <Image style={styles.image} source={{ uri: thumbnailUrl }} />
                <Text style={styles.subtile} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        margin: 8,

        /** boxshadow **/
        borderWidth: 0,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        zIndex: 5,
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 2,
    },
    subtile: {
        height: 24,
        paddingTop: 4,
        paddingLeft: 4,
        paddingRight: 4,
    }
});



export { Itemview };