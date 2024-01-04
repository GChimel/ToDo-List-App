import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 200px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const Logo = styled.Image`

    width: 110px;
    height: 32px;
    
`;