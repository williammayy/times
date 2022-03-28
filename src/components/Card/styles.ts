import styled from 'styled-components/native';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    align-items: center;
    width: 180px;
    height: 200px;
    background-color: ${({ theme }) => theme.COLORS.CARD};
    margin: 10px;
    border-radius: 10px;
`;

export const Image = styled.Image`
    margin-top: 5px;
    width: 150px;
    height: 150px;
`;

export const Title = styled.Text`
    margin-top: 5px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: ${RFPercentage(3)}px;
`;