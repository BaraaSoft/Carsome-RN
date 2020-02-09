import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { ScreenOrientation } from 'expo';
import { connect } from 'react-redux';
import { Itemview } from './Itemview';



const SCREEN_WIDTH = Dimensions.get('window').width;

class Listview extends Component {

    listData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    state = {
        numColumns: 2
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.handleOrientationChange();
    }

    handleOrientationChange() {
        /** On the app Initial load  **/
        ScreenOrientation.getOrientationAsync().then((orientation) => {
            if (orientation.orientation == "LANDSCAPE") this.setState({ numColumns: 5 })
            else this.setState({ numColumns: 2 })
        })

        /** For any other orientation changes  **/
        this.OrientationListener = ScreenOrientation.addOrientationChangeListener((orientation) => {
            if (orientation.orientationInfo.orientation == "LANDSCAPE") this.setState({ numColumns: 5 })
            else this.setState({ numColumns: 2 })
        })
    }


    componentWillUnmount() {
        ScreenOrientation.removeOrientationChangeListener(this.OrientationListener)
    }



    render() {
        const { numColumns } = this.state;
        const { imagesContent } = this.props;
        return (
            <FlatList
                style={styles.container}
                data={imagesContent}
                renderItem={({ item }) => <Itemview data={item} />}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                key={numColumns}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: 0
    },
});


const mapStateToProps = ({ imagesContent }) => {
    return { imagesContent };
}



export default connect(mapStateToProps)(Listview);


