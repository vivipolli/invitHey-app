import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';

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
import { AddBtn, ButtonBottom, RemoveBtn, RemoveTextBtn, TextBtn } from './styles';

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
      <ScrollView>
        {fieldsList.map((item, index) =>
          <Card key={item.id} style={{ marginBottom: 15 }}>
            <Card.Content>
              <TextInput
                placeholder="Presente"
                placeholderTextColor="gray"
                style={{ backgroundColor: '#fff' }}
                onChangeText={value => onChange(value, index, 'name')}
                value={item.name}
                theme={{ colors: { primary: '#FF7527', text: 'gray' },  }}
                right={<TextInput.Affix text="/25" />}
              />
              <Picker
                selectedValue={item.category}
                onValueChange={(value: string) => onChange(value, index, 'category')}
                style={{ height: 30, marginTop: 15, color: 'gray', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
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
            <RemoveBtn onPress={() => deleteGiftCard(item.id)}>
              <MaterialCommunityIcons name="delete-forever" size={24} color="gray" />
              <RemoveTextBtn>Excluir</RemoveTextBtn>
            </RemoveBtn>
          </Card>
        )}
        <AddBtn onPress={addGiftCard}>
          <Image source={addIcon} />
          <TextBtn>Adicionar</TextBtn>
        </AddBtn>
      </ScrollView>
      <ButtonBottom>
        <PrimaryBtn isDefault onPress={onSubmit}>Salvar</PrimaryBtn>
      </ButtonBottom>
    </GlobalComponent>
  );
}

