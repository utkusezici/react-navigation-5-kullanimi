import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeDetail = () => {
    return (
        <View style={styles.container}>
            <Text>Home Detail Screen</Text>
        </View>
    )
}

export default HomeDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
