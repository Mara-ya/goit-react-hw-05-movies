import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid ${p => p.theme.colors.accent};
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[2]}px;
`

export const Item = styled.div`
    &:not(:last-child){
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`