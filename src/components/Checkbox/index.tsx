import React from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { theme } from '../../../theme';


type Props = {
    checked: boolean;
    onPress: () => void;
}

export function Checkbox( {checked, onPress}: Props ) {
    return (
        <View>
            <CheckBox
                title='Me marque'
                containerStyle={{borderWidth: 0, backgroundColor: '#FFFFFF'}}    

                textStyle={{
                    color: checked ? theme.colors.darkGray : theme.colors.textGray, 
                    fontFamily: theme.typography.regular,
                    fontSize: 16,

                }}

                uncheckedColor={theme.colors.textGray} 
                checkedColor='#4CB4FF'
                
                checkedIcon='check-square'           
                
                checked={checked}
                onPress={onPress}
            />
        </View>
    );
}