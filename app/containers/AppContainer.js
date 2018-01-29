import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions"
import React, { Component } from 'react';
import 
{
    View,
    Text,
    Button,
} from "react-native";

class AppContainer extends Component
{
    constructor(props)
    {
        super(props);
    }

    AddUser()
    {
        this.props.AddUser();
    }

    render()
    {
        return <View>
            <Text style = {{ marginTop: 20 }}> 
                AppContainer UserCount: { this.props.UserCount } 
            </Text>
            <Button title = "press" onPress = { () => this.AddUser() }> </Button>
        </View>
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {
        UserCount: state.UserCount
    }
}, mapDispatchToProps)(AppContainer);