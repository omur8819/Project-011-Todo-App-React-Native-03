import React, { useState } from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView. Flatlist } from 'react-native';

import { main } from './styles';
import TodoInput from './components/TodoInput';

const Main = () => {

    const [list, setList] = useState([])

    function addTodo(text) {
        console.log(text)
    }

    return (
        <SafeAreaView style={main.container}>
            <KeyboardAvoidingView style={main.container}>

                <View style={main.banner}>
                    <Text style={main.todoText}>TODO</Text>
                    <Text style={main.todoCount}>10</Text>
                </View>

                <Flatlist 
                    data={list}
                    renderItem={() => null}
                />

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Main;