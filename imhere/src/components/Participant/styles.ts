import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1f1e25",
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    name: {
        color: "#fff",
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },

    buttonText: {
        color: '#fff',
        fontSize: 24,
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#e23c44",
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles