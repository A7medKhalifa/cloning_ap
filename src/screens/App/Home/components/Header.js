import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Bell, Search } from 'assets/icons'
import { colors } from 'theme/colors'
import { HomeStyle } from '../styles'

const Header = () => {
    return (
        <View style={HomeStyle.HeaderContainer}>
            <View style={HomeStyle.HeaderRow}>
                <View>
                    <Text style={HomeStyle.HelloText}>Hello!</Text>
                    <Text style={HomeStyle.name}>Ahmed Elshahawy</Text>
                </View>
                <Bell />
            </View>

            <View style={HomeStyle.SearchContainer}>
                <Search />
                <TextInput
                    placeholder='Search'
                    placeholderTextColor={colors.border}
                    style={HomeStyle.Input}
                />
            </View>
        </View>
    )
}

export default Header