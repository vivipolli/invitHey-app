import React from 'react';

import { View } from 'react-native';

import Bell from '../../assets/icons/Bell.svg';
import GlobalApp from '../../components/GlobalApp';
import Logo from '../../assets/images/logoType_small.svg';
import {
    FilterButtonList
} from './styles';

import { ListProps } from '../MyEvents';

import { TagButton } from '../../components/TagButton';
import { EventCard } from '../../components/EventCard';
import { List, EventCardsList } from '../MyEvents/styles';
import ResearchInput from '../../components/ResearchInput';


export default function Home() {


    const handleIcon = () => {}

    const data: ListProps[] = [
        {
          id: '1',
          title: 'Fyah Burnin',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
          hourInfo: '16h',
          dateInfo: '06/07/1922',
          paymentInfo: 'Pago',
          isActiveIcon: false,
          handleChangeIcon: handleIcon
        },
        {
            id: '2',
            title: 'Bortasi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago',
            isActiveIcon: false,
            handleChangeIcon: handleIcon
        },
        {
            id: '3',
            title: 'Bortasi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago',
            isActiveIcon: false,
            handleChangeIcon: handleIcon
        },
        { 
            id: '4',
            title: 'Bortasi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago',
            isActiveIcon: false,
            handleChangeIcon: handleIcon
        },
        { 
            id: '5',
            title: 'Bortasi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
            hourInfo: '16h',
            dateInfo: '06/07/1922',
            paymentInfo: 'Pago',
            isActiveIcon: false,
            handleChangeIcon: handleIcon
        }

    ];

    return (
        <GlobalApp>
            <ResearchInput placeholder='Pesquise por evento, local ou interesse'/>
            <View>
                <FilterButtonList>
                    <TagButton textBtn='Mais Recentes' />
                    <TagButton textBtn='Mais Populares' />
                    <TagButton textBtn='Avaliacao' />
                    <TagButton textBtn='Proximidade' />
                </FilterButtonList>
            </View>
            <List>
                <EventCardsList 
                    data={data}
                    renderItem={({ item }) =>
                    <EventCard
                        title={item.title}
                        description={item.description}
                        hourInfo={item.hourInfo}
                        dateInfo={item.dateInfo}
                        isActiveIcon={item.isActiveIcon}
                        paymentInfo={item.paymentInfo}
                        handleChangeIcon={item.handleChangeIcon}
                />}
                keyExtractor={item => item.id}
                />
            </List>
        </GlobalApp>
    );
}