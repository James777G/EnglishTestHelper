import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const StartPage: React.FC = () => {

    const navigation = useNavigation()

    const handleEnterPress = () => {
        console.log('Button Pressed');
        // @ts-ignore
        navigation.navigate('NextPage');
    };

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar hidden={false} />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>辞海明灯</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.enterButton}
                        onPress={() => handleEnterPress()}
                        activeOpacity={0.1}
                    >
                        <Text style={styles.buttonText}>进入</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    titleContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: 50,
    },
    title: {
        fontSize: 68,
        fontFamily: 'HanyiSentyJoy Regular',
        color: '#333',
    },
    buttonContainer: {
        marginTop: 20,

    },
    enterButton: {
        height: 48,
        width: 200,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50', // Green color
    },
    buttonText: {
        color: 'white',
        fontFamily: 'HanyiSentyJoy Regular',
        fontSize: 25,
    },

});

export default StartPage;
