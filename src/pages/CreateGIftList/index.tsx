import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { Card, TextInput, List } from 'react-native-paper';

import GlobalComponent from '../../components/GlobalApp';


export function CreateGiftList() {
  const [category, setCategory] = useState('');
  const [expanded, setExpanded] = useState(false);

  const [isPaid, setIsPaid] = useState(false);

  const [privacyType, setPrivacyType] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm();

  function choiceCategory(item: string) {
    setCategory(item);
    setExpanded(false);
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
              expanded={expanded}
              title="Categoria">
              {categories.map(item =>
                <TouchableOpacity
                  key={item}
                  onPress={() => choiceCategory(item)} >
                  <List.Item title="Brinquedos" />
                </TouchableOpacity>
              )}
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>
    </GlobalComponent>
  );
}

