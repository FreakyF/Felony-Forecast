import * as React from 'react';
import {View} from 'react-native';
import {Divider, Text} from 'react-native-paper';

const DividerText = () => (
    <View>
        <Divider style={{marginHorizontal: 20}}/>
        <Text style={{marginLeft: 20}} variant="headlineMedium">Crime Score</Text>
    </View>
);

export default DividerText;