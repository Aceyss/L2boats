import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({ name, description, picture }) => {
    return (
        <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 22, textTransform: 'uppercase' }}>
                <FontAwesome6 name="ship" size={20} color="#333" /> {name}
            </Text>
            <Text style={{ color: 'gray' }}>{description}</Text>
            <Image
                source={picture}
                style={{ width: '100%', height: 250 }}
            />
        </View>
    );
};

export default Boat;