
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchImagesContent } from '../actions'



const TabOne = () => (<Text style={{ fontSize: 18 }}>1</Text>)
const TabTwo = () => (<Text style={{ fontSize: 18 }}>2</Text>)


class Tabs extends Component {
    state = {
        selectedIndex: 0
    }
    constructor(props) {
        super(props)
        this.onTabSelected = this.onTabSelected.bind(this)
    }
    componentDidMount() {
        let { selectedIndex } = this.state;
        this.props.fetchImagesContent(++selectedIndex)
    }
    onTabSelected(selectedIndex) {
        this.setState({ selectedIndex })
        this.props.fetchImagesContent(++selectedIndex)
    }
    render() {
        const buttons = [{ element: TabOne }, { element: TabTwo }]
        const { selectedIndex } = this.state
        return (
            <ButtonGroup
                onPress={this.onTabSelected}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{ height: 40, width: 180, alignSelf: "center" }} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { fetchImagesContent })(Tabs);
