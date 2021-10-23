import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { Card, TextInput, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import GlobalComponent from '../../components/GlobalApp';


export function CreateGiftList() {
  const [category, setCategory] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selectTitle, setSelectTitle] = useState('Categoria');
  const [privacyType, setPrivacyType] = useState('');

  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    navigation.setParams({ headerTitle: 'Criar Sugestões de presentes'})
  }, [])

  function choiceCategory(item: string) {
    setCategory(item);
    setExpanded(false);
    setSelectTitle(item);
  }

  const categories = [
    "Brinquedos",
    "Moda",
    "Eletrodomésticos",
    "Livros",
    "Papelaria",
    "Casa",
    "Comida"
  ]

  return (
    <GlobalComponent>
      <Card>
        <Card.Content>
          <Controller
            control={control}
            rules={{ required: true }}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Presente"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={errors.name?.type === 'required'}
                right={<TextInput.Affix text="/25" />}
              />
            )}
          />
          <List.Section>
            <List.Accordion
              onPress={() => setExpanded(open => !open)}
              expanded={expanded}
              title={selectTitle}>
              {categories.map(item =>
                <TouchableOpacity
                  key={item}
                  onPress={() => choiceCategory(item)} >
                  <List.Item title={item} />
                </TouchableOpacity>
              )}
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>
    </GlobalComponent>
  );
}

