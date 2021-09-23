import React, {useState} from 'react';
import { View, StyleSheet, Modal } from 'react-native';

import ImageBg from '../../../assets/images/bg.png';

import GlobalComponent from '../../../components/GlobalApp'; 
import { TagButton } from '../../../components/TagButton';

import {
    BackgroundImage,
    ConfirmArea,
    ConfirmText,
    Container,
    Done,
    Favorite,
    Separator,
    FavoriteButton,
    ModalView,
    Header,
    Title,
    Icon,
    ButtonModal,
    CreatedBy,
    Data,
    DataInfo,
    DataIcon,
    LocalDescription,
    Buttons,
    Description,
    EventDescription,
    GeneralInfo,
    MainText,
    Main,
    MainOption

} from './styles';

const data = {
    icons: {
        calendar: 'calendar-today',
        clock: 'access-time',
        usd: 'attach-money',
        favorite: 'favorite',
        done: 'done',
        moreVert: 'more-vert',
        local: 'pin-drop',
        chevronRight: 'chevron-right',
        close: 'close'
    },
    info: {
        date: '03/06/1996',
        hour: '23:00',
        payment: {
            positive: 'Pago',
            negative: 'Pendente'
        },
        description: 'Ilha paradisíaca de Great Exuma, Bahamas'    
    },
    filter: {
        confirmed: 'confirmed',
        followers: 'followers'
    }
}


export function Event() {
    const [modalOpen, setModalOpen] = useState(false);

    const [filterActive, setFilterActive] = useState('all');
        
    function handleFilterActive(type: string) {
      setFilterActive(type);
    }

    return (
        <GlobalComponent>
            <Container>
                <BackgroundImage source={ ImageBg } />
                <Separator>
                    <ConfirmArea>
                        <ConfirmText>Confirmado</ConfirmText>
                        <Done name={data.icons.done} />
                    </ConfirmArea>
                    <FavoriteButton>
                        <Favorite name={data.icons.favorite} />
                    </FavoriteButton>
                </Separator>
            </Container>
                <GeneralInfo>
                    <Header>
                        <View>
                            <Title>Woodstock</Title>
                            <CreatedBy>Criado por Bryan</CreatedBy>
                        </View>
                        <ButtonModal onPress={() => setModalOpen(true)} >
                            <Icon name={data.icons.moreVert} />
                        </ButtonModal>
                    </Header>

                    <View style={styles.view}>
                        <Data>
                            <DataIcon name={data.icons.calendar} />
                            <DataInfo>{data.info.date}</DataInfo>
                        </Data>
                        <Data>
                            <DataIcon name={data.icons.clock} />
                            <DataInfo>{data.info.hour}</DataInfo>
                        </Data>
                        <Data>
                            <DataIcon name={data.icons.usd} />
                            <DataInfo>{data.info.payment.positive}</DataInfo>
                        </Data>
                    </View>
                    <View style={styles.view}>
                        <DataIcon name={data.icons.local}/>
                        <LocalDescription>{data.info.description}</LocalDescription>
                    </View>

                    <Buttons>
                        <TagButton 
                            textBtn='146 Confirmados' 
                            isActive={filterActive === data.filter.confirmed}
                            handleButton={() => handleFilterActive(data.filter.confirmed)}
                        />
                        <TagButton 
                            textBtn='560 Seguidores' 
                            isActive={filterActive === data.filter.followers}
                            handleButton={() => handleFilterActive(data.filter.followers)}
                        />
                    </Buttons>
                    <Description>
                        <EventDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget venenatis dolor, at commodo nulla. Donec vehicula massa interdum nisi cursus, quis convallis nibh venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget venenatis dolor, at commodo nulla. Donec vehicula massa interdum nisi cursus, quis convallis nibh venenatis.
                        </EventDescription>
                    </Description>
                </GeneralInfo>
                
                <Modal visible={modalOpen} animationType='slide' >
                    <ModalView >    
                        <ButtonModal onPress={() => setModalOpen(false)} >
                            <Icon name={data.icons.close} />
                        </ButtonModal>
                        <Main>
                            <MainOption>
                                <MainText>Convidar Amigo</MainText>
                                <Icon name={data.icons.chevronRight} />
                            </MainOption>
                            <MainOption>
                                <MainText>Compartilhar</MainText>
                                <Icon name={data.icons.chevronRight} />
                            </MainOption>
                        </Main>    
                    </ModalView>
                </Modal>
        </GlobalComponent>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
    }
})