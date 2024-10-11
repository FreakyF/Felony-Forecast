import * as React from 'react';
import {Appbar} from 'react-native-paper';

const AppBarBackAction = () => (
    <Appbar.Header>
        <Appbar.Action
            icon="arrow-u-left-top"
            onPress={() => {
        }}/>
        <Appbar.Content
            title="Felony Forecast"
            style={{ flex: 1 }}
            titleStyle={{ textAlign: 'center' }}
        />
        <Appbar.Action icon="dots-vertical" onPress={() => {
        }}/>
    </Appbar.Header>
);

export default AppBarBackAction;