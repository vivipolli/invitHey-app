import styled from '../../../styled-components';


type BtnProps = {
  isActive?: boolean;
  width?: string;
};

export const Btn = styled.TouchableOpacity<BtnProps>`
    height: 32px;
    padding: 0 25px;
    background-color: ${(props) => props.isActive ?
      props.theme.colors.darkGray
      :
      props.theme.colors.lightGray
    };
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

export const TextBtn = styled.Text<BtnProps>`
    ${(props) => {
      return`
        color: ${props.isActive ?
        props.theme.colors.white
        :
        props.theme.colors.darkGray
      };
      font-size: ${props.theme.typography.smallestFont};
      font-family: ${props.theme.typography.regular};
    `
  }}
`;