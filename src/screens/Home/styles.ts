import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View `
    width: 100%;
    height: 70px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    justify-content: flex-end;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.TEXT}
`;

export const Content = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: center;
`;