import React from 'react';

import { TouchableOpacity } from 'react-native';

import {
    Card,
    Icon,
    CardHeader,
    EventImage,
    Hold,
    TitleHeart,
    CardTitle,
    CardInfo,
    Date,
    Hour,
    Payment,
    Footer,
    FooterText,
    HourIcon,
    PaymentIcon,
    DateIcon,
    Text
} from './styles';

export interface CardProps {
    title: string;
    dateInfo: string;
    hourInfo: string;
    paymentInfo: string;
    description: string;
    isActiveIcon: boolean;
    handleChangeIcon?: () => void;
}

export function EventCard( { 
    title, 
    dateInfo, 
    paymentInfo, 
    hourInfo, 
    description, 
    isActiveIcon, 
    handleChangeIcon 
}: CardProps ) {

    return (
        <Card>
            <CardHeader>
                <EventImage
                    source={{uri: 'https://avatars.githubusercontent.com/u/55644267?v=4'}}
                />
                <Hold>
                    <TitleHeart>
                        <CardTitle>{title}</CardTitle>

                        <TouchableOpacity onPress={handleChangeIcon}>
                            <Icon isActiveIcon={isActiveIcon} name='heart'/>
                        </TouchableOpacity>    

                    </TitleHeart>
                    <CardInfo>
                        <Date>
                            <DateIcon name="calendar-blank"  />
                            <Text>{dateInfo}</Text>
                        </Date>
                        <Hour>
                            <HourIcon name="clock-outline" />   
                            <Text>{hourInfo}</Text>
                        </Hour>
                        <Payment>
                            <PaymentIcon name="currency-usd" />
                            <Text>{paymentInfo}</Text>
                        </Payment>
                    </CardInfo>
                </Hold>
            </CardHeader>
            <Footer>
                <FooterText>
                    {description}
                </FooterText>
            </Footer>
        </Card>
    )
}