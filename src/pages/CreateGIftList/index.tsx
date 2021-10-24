import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import uuid from 'react-native-uuid';
import { Card, TextInput, List } from 'react-native-paper';

import GlobalComponent from '../../components/GlobalApp';
import addIcon from '../../assets/icons/add_icon.png';
import PrimaryBtn from '../../components/PrimaryBtn';
import { StackParams } from '../../routes/routes.types';

export type GiftProps = {
  id: string,
  name: string,
  category: string,
}


export function CreateGiftList() {
  const [fieldsList, setFieldsList] = useState([
    {
      id: uuid.v4() as string,
      name: '',
      category: '',
    }
  ]);

  const navigation = useNavigation<StackNavigationProp<StackParams>>();

  function onChange(value: string, index: number, name: string) {
    const newState = fieldsList.map((item, i) => {
      if (i === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setFieldsList(newState);
  }

  const addGiftCard = () => {
    console.info(fieldsList);
    const newCard = [...fieldsList];
    newCard.push({ id: uuid.v4() as string, name: '', category: 'Categoria' });
    setFieldsList(newCard);
  }

  const deleteGiftCard = (key: string) => {
    const field = fieldsList.filter(item => item.id !== key);
    setFieldsList(field);
  }

  function onSubmit() {
    navigation.navigate('CreateEvent', { gifts: fieldsList });
    console.info(fieldsList);
  }

  return (
    <GlobalComponent>
      {fieldsList.map((item, index) =>
        <Card key={item.id}>
          <Card.Content>
            <TextInput
              placeholder="Presente"
              onChangeText={value => onChange(value, index, 'name')}
              value={item.name}
              right={<TextInput.Affix text="/25" />}
            />
            <Picker
              selectedValue={item.category}
              onValueChange={(value: string) => onChange(value, index, 'category')}
              style={{ height: 30 }}>
              <Picker.Item value="Categoria" label="Categoria" />
              <Picker.Item value="Brinquedos" label="Brinquedos" />
              <Picker.Item value="Moda" label="Moda" />
              <Picker.Item value="Eletrodomésticos" label="Eletrodomésticos" />
              <Picker.Item value="Livros" label="Livros" />
              <Picker.Item value="Papelaria" label="Papelaria" />
              <Picker.Item value="Casa" label="Casa" />
              <Picker.Item value="Comida" label="Comida" />
            </Picker>
          </Card.Content>
          <TouchableOpacity onPress={() => deleteGiftCard(item.id)}>
            <MaterialCommunityIcons name="delete-forever" size={24} color="gray" />
          </TouchableOpacity>
        </Card>
      )}
      <TouchableOpacity>
        <Image source={addIcon} />
        <Text onPress={addGiftCard}>Adicionar</Text>
      </TouchableOpacity>

      <PrimaryBtn isDefault onPress={onSubmit}>Salvar</PrimaryBtn>
    </GlobalComponent>
  );
}

