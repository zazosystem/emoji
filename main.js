import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component,useState } from 'react'

export default class main extends Component {
    state = {
        image: require('./assets/care.png')
    }
    list = [
        require('./assets/angry.png'),
        require('./assets/care.png'),
        require('./assets/haha.png'),
        require('./assets/like.png'),
        require('./assets/love.png'),
        require('./assets/sad.png')
    ]
    _changeSrc = (src) => {
        this.setState({
            image : src
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Bạn đang cảm thấy như thế nào?</Text>
                <Image style={styles.image} source={this.state.image}/>
                <View style={styles.icon_content}>
                {this.list.map((item,index)=>(
                    <TouchableOpacity onPress={() => this._changeSrc(item)}>
                        <Image style={styles.icon_content_image} source={item}/>
                    </TouchableOpacity>
                ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18
    },
    image:{
        marginVertical: 20,
        width: 180,
        height: 180
    },
    icon_content:{
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon_content_image:{
        width: 45,
        height: 45,
        marginHorizontal: 5
    }
});