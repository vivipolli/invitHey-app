import React, { useState, useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';
import Parse from 'parse/react-native';

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
import { StackParams } from '../../routes/routes.types';
import { GiftProps } from '../CreateGIftList';
import { GuestProps } from '../CreateGuest';
import { StackNavigationProp } from '@react-navigation/stack';

type Address = {
  cep: string;
  street: string;
  number: string;
  vilage: string;
  state: string;
  city: string;
}

type EventProps = {
  type: string;
  name: string;
  datetime: string;
  cep?: string;
  street?: string;
  number?: string;
  vilage?: string;
  state?: string;
  city?: string;
  description: string;
  isPaid: boolean;
  price?: string; 
  gifts?: GiftProps[];
  guests: GuestProps[];
}

export function CreateEvent() {
  const [guests, setGuests] = useState();
  const [gifts, setGifts] = useState();
  const [data, setData] = useState();
  const [privacyType, setPrivacyType] = useState('private');

  const [typeEnabled, setTypeEnabled] = useState({
    private: true,
    public: false,
  });

  const [isPaid, setIsPaid] = useState(false);

  const navigation = useNavigation<StackNavigationProp<StackParams>>();

  const route = useRoute();
  const { control, handleSubmit, formState: { errors } } = useForm();


  useEffect(() => {
    if (route.params) {
      setGuests(route.params.guests);
      setGifts(route.params.gifts);
    }
  }, [])

  function handleChange(type: string) {
    setTypeEnabled({ [type]: !typeEnabled[type] });
    setPrivacyType(type);
    console.log(typeEnabled);
  }

  const createEvent = async function (data: EventProps): Promise<boolean> {
    console.info(data);
    console.info(guests);
    console.info(gifts);
    try {
      let Event: Parse.Object = new Parse.Object('Event');
      const currentUser = await Parse.User.currentAsync();
      
      const address = {
        cep: data.cep,
        street: data.street,
        number: data.number,
        vilage: data.vilage,
        state: data.state,
        city: data.city,
      }      
      Event.set('owner', currentUser?.get('username'));
      Event.set('type', privacyType);
      Event.set('name', data.name);
      Event.set('datetime', data.datetime);
      Event.set('address', address);
      Event.set('description', data.description);
      Event.set('isPaid', isPaid);
      Event.set('price', data.price);     
    

      try {
        const event = await Event.save();
        const eventParsed = JSON.parse(JSON.stringify(event))
        navigation.navigate('CreateGuest', { objectId: eventParsed.objectId });

        console.info('success');
        return true;
      } catch (error) {
        console.info(error)
        return false;
      }
    } catch (error) {
      console.info(error)
      return false;
    }
  };

  return (
    <GlobalComponent>
      <List>
        <Title style={{ marginBottom: 20 }}>Seleção de Privacidade</Title>
        <Category>
          <ButtonSwitch
            isEnabled={typeEnabled.private}
            toggleSwitch={() => handleChange('private')}
          />
          <CategoryText>Evento Privado</CategoryText>
        </Category>

        <Category>
          <ButtonSwitch
            isEnabled={typeEnabled.public}
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
        </FlexRow>

        <Controller
          control={control}
          rules={{ required: true }}
          name="cep"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Cep"
              onBlur={onBlur}
              keyboardType="numeric"
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
                keyboardType="numeric"
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
              isEnabled={typeEnabled}
              toggleSwitch={handleChange}
            />
            <CategoryText>Sim</CategoryText>
          </Category>
          <Category style={{ marginLeft: 25 }}>
            <ButtonSwitch
              isEnabled={typeEnabled}
              toggleSwitch={handleChange}
            />
            <CategoryText>Nao</CategoryText>
          </Category>
        </FlexRow> */}
        <PrimaryBtn onPress={() => navigation.navigate('CreateGiftList', { data })} isDefault>Adicionar presentes</PrimaryBtn>
        <PrimaryBtn onPress={handleSubmit(createEvent)} isDefault={false}>Adicionar convidados</PrimaryBtn>
        <Space />
      </List>
    </GlobalComponent>
  );
}

// const styles = StyleSheet.create({
//     input: {

// })