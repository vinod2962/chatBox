import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Splash({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <Text>Splash</Text>
                <Button
                    title='next page'
                    onPress={() => navigation.navigate('HomePage')}
                />
            </View>
        </SafeAreaView>
    )
}