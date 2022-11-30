import styled from "styled-components"

export const Item = styled.li`
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;

    &:not(:last-child) {
        margin-bottom: ${p => p.theme.space[2]}px;
    }
`;

export const Text = styled.p`
    padding: ${p => p.theme.space[3]}px;
`
