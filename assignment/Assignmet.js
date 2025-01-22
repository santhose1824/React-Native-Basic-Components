import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    Pressable,
    Switch,
    View,
    StyleSheet,
} from 'react-native';

const Assignment = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [submittedInfo, setSubmittedInfo] = useState([]);
    const [showInfo, setShowInfo] = useState(true);

    const handleSubmit = () => {
        if (name && age) {
            setSubmittedInfo((prev) => [...prev, { name, age }]);
            setName('');
            setAge('');
        } else {
            alert('Please enter both name and age!');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                    placeholderTextColor="#888"
                />
                <Text style={styles.label}>Age:</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={setAge}
                    placeholder="Enter your age"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                />
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Show Information:</Text>
                    <Switch
                        value={showInfo}
                        onValueChange={setShowInfo}
                        thumbColor="#28CB8B"
                        trackColor={{ false: '#767577', true: '#81C784' }}
                    />
                </View>
            </View>
            {showInfo && (
                <ScrollView style={styles.scrollContainer}>
                    {submittedInfo.map((info, index) => (
                        <View key={index} style={styles.infoCard}>
                            <Text style={styles.infoText}>
                                {index + 1}. Name: {info.name}, Age: {info.age}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#28CB8B',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    scrollContainer: {
        flex: 1,
        marginTop: 16,
        padding: 8,
    },
    infoCard: {
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: '#E8F5E9',
    },
    infoText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Assignment;
