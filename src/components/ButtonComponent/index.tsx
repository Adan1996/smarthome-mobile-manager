import React from 'react';
import { Button } from 'react-native';

const ButtonComponent = () => {
    return (
        <Button
            title="Registrer"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    )
}

export default React.memo(ButtonComponent);