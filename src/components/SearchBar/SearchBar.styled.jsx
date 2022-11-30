import styled from "styled-components";

export const Input = styled.input`
    border-radius: ${p => p.theme.radii.normal};
    margin-right: ${p => p.theme.space[5]}px;
    height: ${p => p.theme.space[5]}px;
`;

export const SubmitBtn = styled.button`
    border-radius: ${p => p.theme.radii.normal};
    height: ${p => p.theme.space[5]}px;
    width: ${p => p.theme.space[7]}px;
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.black};
`;