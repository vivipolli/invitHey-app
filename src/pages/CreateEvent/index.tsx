import React, { useState, useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';

import GlobalComponent from '../../components/GlobalApp';
import ButtonSwitch from '../../components/ButtonSwitch';
import { EventCategory } from '../../components/EventCategory';

import {
  Title,
  Category,
  CategoryText,
  List,
  Separator,
  FlexRow,
  Div,
  Advert,
  Icon,
  Brlamount,
  Header,
  Space
} from './styles';
import TextInput from '../../components/TextInput';
import PrimaryBtn from '../../components/PrimaryBtn';

export function CreateEvent() {
  const [enabled, setEnabled] = useState({
    private: true,
    public: false,
  });

  const [isPaid, setIsPaid] = useState(false);

  const [privacyType, setPrivacyType] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { control, handleSubmit, formState: { errors } } = useForm();

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: 'teste' });
  },
  [navigation]);


  function handleChange(type: string) {
    setEnabled({ [type]: !enabled[type] });
    setPrivacyType(type);
    console.log(enabled);
  }


  return (
    <GlobalComponent>
      <List>
        <Title style={{ marginBottom: 20 }}>Seleção de Privacidade</Title>
        <Category>
          <ButtonSwitch
            isEnabled={enabled.private}
            toggleSwitch={() => handleChange('private')}
          />
          <CategoryText>Evento Privado</CategoryText>
        </Category>

        <Category>
          <ButtonSwitch
            isEnabled={enabled.public}
            toggleSwitch={() => handleChange('public')}
          />
          <CategoryText>Evento Público</CategoryText>
        </Category>
        {/* <Category style={{ marginBottom: 0 }}>
          <ButtonSwitch
            isEnabled={privacyType === 'friends'}
            toggleSwitch={) => handleChange('friends')}
          />
          <CategoryText>Evento para amigos de amigos</CategoryText>
        </Category> */}

        <Separator />

        <Controller
          control={control}
          rules={{ required: true }}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Nome do evento"
              placeholder="Digite o nome do evento"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              error={errors.name?.type === 'required'}
            />
          )}
        />

        <FlexRow>
          <Controller
            control={control}
            rules={{ required: true }}
            name="date"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Data"
                onBlur={onBlur}
                placeholder="26/09/1991"
                onChangeText={value => onChange(value)}
                value={value}
                type='date'
                width="50%"
                error={errors.date?.type === 'required'}
              />
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="hour"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Hora"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="14:00"
                type='custom'
                mask="HH:mm"
                width="40%"
                error={errors.hour?.type === 'required'}
              />
            )}
          />
        </FlexRow>

        <Controller
          control={control}
          rules={{ required: true }}
          name="cep"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Cep"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="00000-000"
              error={errors.cep?.type === 'required'}
            />
          )}
        />
        <FlexRow>
          <Controller
            control={control}
            rules={{ required: true }}
            name="street"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Rua"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Digite o nome da rua"
                width="60%"
                error={errors.street?.type === 'required'}
              />
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="number"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Número"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="123"
                width="35%"
                error={errors.number?.type === 'required'}
              />
            )}
          />
        </FlexRow>

        <FlexRow>
          <Controller
            control={control}
            rules={{ required: true }}
            name="vilage"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Bairro"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Digite o nome do bairro"
                width="65%"
                error={errors.vilage?.type === 'required'}
              />
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="state"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Estado"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                width="30%"
                error={errors.state?.type === 'required'}
              />
            )}
          />
        </FlexRow>

        <Controller
          control={control}
          rules={{ required: true }}
          name="city"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Cidade"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              error={errors.city?.type === 'required'}
            />
          )}
        />

        <Controller
          control={control}
          rules={{ required: true }}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Descrição do evento"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              error={errors.description?.type === 'required'}
            />
          )}
        />





        <Separator style={{ marginTop: 15 }} />
        {/* 
        <Title style={{ marginBottom: 16 }}>Selecione o tipo de evento: </Title>

        <EventCategory
          title='Social'
          onPress={() => { }}
        />
        <EventCategory
          title='Corporativo'
          onPress={() => { }}
        />
        <EventCategory
          title='Religioso'
          onPress={() => { }}
        />
        <EventCategory
          title='Acadêmico e Educacional'
          onPress={() => { }}
        />
        <EventCategory
          title='Cultural e Entretenimento'
          onPress={() => { }}
        />
        <EventCategory
          style={{ marginBottom: 0 }}
          title='Esportivo'
          onPress={() => { }}
        /> */}
        <FlexRow style={{ justifyContent: 'flex-start' }}>
          <Category>
            <ButtonSwitch
              isEnabled={isPaid}
              toggleSwitch={() => setIsPaid((paid) => !paid)}
            />
            <CategoryText>Pago</CategoryText>
          </Category>
          <Category style={{ marginLeft: 25 }}>
            <ButtonSwitch
              isEnabled={!isPaid}
              toggleSwitch={() => setIsPaid((paid) => !paid)}
            />
            <CategoryText>Gratuito</CategoryText>
          </Category>
        </FlexRow>
        {isPaid &&
          <Brlamount>
            <Div style={{ flexDirection: 'row' }}>
              <Icon name='attach-money' />
              <Title style={{ marginBottom: 0 }}>Valor em reais</Title>
            </Div>
            <Controller
              control={control}
              name="price"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label=""
                  onBlur={onBlur}
                  placeholder="R$"
                  type="money"
                  width="40%"
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
          </Brlamount>
        }

        {/* <Title style={{ marginBottom: 20 }}>Adicionar lista de presentes ao evento?</Title>
        <FlexRow style={{ justifyContent: 'flex-start' }}>
          <Category>
            <ButtonSwitch
              isEnabled={enabled}
              toggleSwitch={handleChange}
            />
            <CategoryText>Sim</CategoryText>
          </Category>
          <Category style={{ marginLeft: 25 }}>
            <ButtonSwitch
              isEnabled={enabled}
              toggleSwitch={handleChange}
            />
            <CategoryText>Nao</CategoryText>
          </Category>
        </FlexRow> */}
        <PrimaryBtn onPress={() => navigation.navigate('CreateGiftList')} isDefault>Adicionar convidados</PrimaryBtn>
        <Space />
      </List>
    </GlobalComponent>
  );
}

// const styles = StyleSheet.create({
//     input: {

// })