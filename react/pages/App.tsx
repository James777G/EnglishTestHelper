import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const StartPage: React.FC = () => {

    const handleEnterPress = () => {
        console.log('Button Pressed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>小X做题</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.enterButton}
                        onPress={handleEnterPress}
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    titleContainer: {
        marginBottom: 60,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
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
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default StartPage;
