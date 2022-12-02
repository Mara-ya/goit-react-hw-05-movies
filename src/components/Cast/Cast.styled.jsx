import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[2]}px;

    @media screen and (min-width: 330px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media screen and (min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    `;

export const Item = styled.li`
    width: 100px;
    margin-bottom: ${p => p.theme.space[4]}px;
    
    & p{
        text-align: center;
    }

    & p:not(:last-child){
        margin-bottom: ${p => p.theme.space[3]}px;
    }
    
    & img{
        width: 100px;
        margin-bottom: ${p => p.theme.space[3]}px;
    }


    @media screen and (min-width: 768px){
        width: 200px;
        margin-left: ${p => p.theme.space[4]}px;

        & img{
        width: 200px;
        }
    }

    @media screen and (min-width: 1200px){
        width: 250px;
        margin-left: ${p => p.theme.space[4]}px;

        & img{
        width: 250px;
        }
    }
`