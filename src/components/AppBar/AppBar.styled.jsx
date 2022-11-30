import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { theme } from 'theme';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => theme.colors.accent};
`;

export const Navigation = styled.nav`
  padding: ${p => p.theme.space[3]}px;
`;

export const LinkItem = styled(NavLink)`
    &:not(:last-child){
        margin-right: ${p => p.theme.space[4]}px;
    }
`;
