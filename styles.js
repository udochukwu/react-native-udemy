
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    screen: {
        padding: 15, marginTop: 50,
    },
    inputContainer: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20 },
    textInput: { borderColor: '#b6b6b6', borderWidth: 1, padding: 5, width: '80%', marginBottom: 10, },
    listItem: {
        padding: 10,
        backgroundColor: '#adadad',
        borderColor: '#7c7b7b',
        borderWidth: 1,
        marginVertical: 10
    },
    inputButtonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        // backgroundColor: 'grey',
    },
    button: {
        width: 100,
    }
});

export default styles;