import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232327',
        paddingTop: 64,
        paddingHorizontal: 32,
    },
    
    eventTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6
    },

    eventDate: {
        color: "#f5f5f5"
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        marginVertical: 16,
        marginRight: 12,
        padding: 16,
        color: '#fff',
        fontSize: 14,
    },

    buttonText: {
        color: '#fff',
        fontSize: 24,
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",
        alignItems: 'center',
        justifyContent: 'center',
    },

    form: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
})

export default styles