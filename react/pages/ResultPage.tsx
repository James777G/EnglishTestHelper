import React from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// @ts-ignore
const ResultPage: React.FC = ({ route }) => {
    const { result } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {result !== '' ? (
                <Text style={styles.resultText}>{result}</Text>
            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
    },
    resultText: {
        color: '#000',
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ResultPage;
