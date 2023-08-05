import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 45,
              textAlign: 'center'
            }}>
              Juan Miguel Hernandez 2019-0453
            </Text>
        </View>
    )
}
