import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../import/img/kitchen.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.cook_img} source={logo} />
            <div style={styles.div}>
                <Text style={styles.title}>Bienvenue</Text>
                <Text style={styles.description}>Découvrez de délicieuses recettes adaptées à vos ingrédients et préférences culinaires</Text>
            </div>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('HomePage')
            }}>
                <Text style={styles.buttonText}>En avant</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('HomePage')
            }}>
                <Text style={styles.link}>Crée un compte</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cook_img: {
        width: '100%',
        height: '100%',
        maxHeight: 300,
        maxWidth: 300,
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 20,
    },
    description: {
        fontSize: 14,
        color: '#000',
        marginTop: 10,
        textAlign: 'center',
        width: '75%',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15%',
        backgroundColor: '#588157',
        color: '#fff',
        width: '80%',
        height: 50,
        borderRadius: 50,
        border: 'none',
        maxWidth: 300,
    },
    buttonText: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#fff',
        fontSize: 17,
    },
    link: {
        marginTop: 35,
        color: '#588157',
        fontSize: 15,
        fontFamily: 'Roboto',
    },
});
