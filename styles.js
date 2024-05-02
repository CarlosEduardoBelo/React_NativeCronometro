import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6c08a6',
        marginHorizontal: 40,
        marginVertical: 100,
        borderRadius: 30
    },
    cronometro: {
        width: 250,
        height: 250,
    },
    timer: {
        marginTop: -150,
        color: '#FFF',
        fontSize: 65,
        fontWeight: 'bold'
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 80,
        height: 40
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        margin: 15,
        borderRadius: 9,
        width: 120
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6c08a6'
    },
    areaUltima: {
        marginTop: 50,
        backgroundColor: '#FFF',
        borderRadius: 5,
        width: 250,
    },
    textoCorrida: {
        fontSize: 25,
        fontStyle: 'italic',
        color: '#6c08a6',
        textAlign: 'center',
        paddingVertical: 5
    }
});
export default styles;