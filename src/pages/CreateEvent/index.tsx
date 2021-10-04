import React, {useState} from 'react';


import GlobalComponent from '../../components/GlobalApp';
import ButtonSwitch from '../../components/ButtonSwitch';
import { EventCategory } from '../../components/EventCategory';

import {
    Title,
    Category,
    CategoryText,
    List,
    MyInput,
    Separator,
    FlexRow,
    Div,
    Advert,
    Icon,
    Brlamount,
    Header
} from './styles';

export function CreateEvent() {
    const [enabled, setEnabled] = useState(false);

    function handleChange() {
        setEnabled(!enabled)
    }


    return (
        <GlobalComponent>
            <List>
                <Title style={{marginBottom: 20}}>Seleção de Privacidade</Title>
                <Category>
                    <ButtonSwitch 
                        isEnabled={enabled}
                        toggleSwitch={handleChange}
                    />
                    <CategoryText>Evento Privado</CategoryText>
                </Category>
                <Category>
                    <ButtonSwitch 
                        isEnabled={enabled}
                        toggleSwitch={handleChange}
                    />
                    <CategoryText>Evento Público</CategoryText>
                </Category>
                <Category style={{marginBottom: 0}}>
                    <ButtonSwitch 
                        isEnabled={enabled}
                        toggleSwitch={handleChange}
                    />
                    <CategoryText>Evento para amigos de amigos</CategoryText>
                </Category>
                
                <Separator />
                
                <Title>Nome do Evento</Title>
                <MyInput 
                    type={'custom'}
                    placeholder='Digite o nome do evento'
                />
                <FlexRow>
                    <Div>
                        <Title>Data</Title>
                        <MyInput 
                            type={'custom'}
                            placeholder='Ola'
                        />
                    </Div>
                    <Div>
                        <Title>Hora</Title>
                        <MyInput 
                            type={'custom'}
                            placeholder='Ola'
                        />
                    </Div>
                </FlexRow>

                <Title>Cep</Title>
                <MyInput 
                    type={'custom'}
                    placeholder='Ola'
                />
                <FlexRow>
                    <Div>
                        <Title>Rua</Title>
                        <MyInput 
                            type={'custom'}
                            placeholder='Nome da rua'
                        />
                    </Div>
                    <Div>
                        <Title>Número</Title>
                        <MyInput 
                            type={'custom'}
                            placeholder='00'
                        />
                    </Div>
                </FlexRow>

                <FlexRow>
                    <Div>
                        <Title>Bairro</Title>
                        <MyInput 
                            type={'custom'}
                            placeholder='Bairro'
                        />
                    </Div>
                    <Div>
                        <Title>Estado</Title>
                        <MyInput 
                            type={'custom'}
                            placeholder=''
                        />
                    </Div>
                </FlexRow>
                <Title>Cidade</Title>
                
                <>
                    <Header>
                        <Title>Descrição do Evento</Title>
                        <Advert>(Max. 425 caractéres)</Advert>
                    </Header>
                    
                </>
                
                
                <Separator style={{marginTop: 15}} />
                
                <Title style={{marginBottom: 16}}>Selecione o tipo de evento:</Title>
            
                <EventCategory 
                    title='Social'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Corporativo'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Religioso'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Acadêmico e Educacional'
                    onPress={() => {}}
                />
                <EventCategory 
                    title='Cultural e Entretenimento'
                    onPress={() => {}}
                />
                <EventCategory 
                    style={{marginBottom: 0}}
                    title='Esportivo'
                    onPress={() => {}}
                />
                <Separator />
                <FlexRow style={{justifyContent: 'flex-start'}}>
                    <Category>
                        <ButtonSwitch 
                            isEnabled={enabled}
                            toggleSwitch={handleChange}
                        />
                        <CategoryText>Pago</CategoryText>
                    </Category>
                    <Category style={{marginLeft: 25}}>
                        <ButtonSwitch 
                            isEnabled={enabled}
                            toggleSwitch={handleChange}
                        />
                        <CategoryText>Gratuito</CategoryText>
                    </Category>
                </FlexRow>
                <Brlamount>
                    <Div style={{flexDirection: 'row'}}>
                        <Icon name='attach-money' />
                        <Title style={{marginBottom: 0}}>Valor em reais</Title>
                    </Div>
                    <MyInput 
                            
                            type={'custom'}
                            placeholder='Ola'
                        />
                </Brlamount>
                
                <Separator />

                <Title style={{marginBottom: 20}}>Adicionar lista de presentes ao evento?</Title>
                <FlexRow style={{justifyContent: 'flex-start'}}>
                    <Category>
                        <ButtonSwitch 
                            isEnabled={enabled}
                            toggleSwitch={handleChange}
                        />
                        <CategoryText>Sim</CategoryText>
                    </Category>
                    <Category style={{marginLeft: 25}}>
                        <ButtonSwitch 
                            isEnabled={enabled}
                            toggleSwitch={handleChange}
                        />
                        <CategoryText>Nao</CategoryText>
                    </Category>
                </FlexRow>
            </List>
        </GlobalComponent>
    );
}

// const styles = StyleSheet.create({
//     input: {
    
// })