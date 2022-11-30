import styled from "styled-components";

export const WrapperGoBack = styled.div`
    & a{
        display: flex;
        align-items: center;
    }

    & svg{
        margin-right: ${p => p.theme.space[3]}px;
    }
`;

export const WrapperMovie = styled.div`
    margin-top: ${p => p.theme.space[3]}px;

    & p{
        margin-bottom: ${p => p.theme.space[1]}px;
    }
    & h2{
        margin-bottom: ${p => p.theme.space[3]}px;
    }

    & h3{
        margin-bottom: ${p => p.theme.space[3]}px;
        margin-top: ${p => p.theme.space[4]}px;
    }

    @media screen and (min-width:480px) {
        display: flex;
        gap: ${p => p.theme.space[4]}px;
    }
`;

export const Img = styled.img`
    width: 250px;
`;

