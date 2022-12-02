import { Header, LinkItem, Navigation } from "./AppBar.styled";

const navItem = [
    {href: '/', text: 'Home'},
    {href: 'movies', text: 'Movies'},
];

export const AppBar = () => {
    return (
        <Header>
            <Navigation>
                {navItem.map(({href, text}) => (
                    <LinkItem to={href} key={href}>
                        {text}
                    </LinkItem>
                ))}
            </Navigation>
        </Header>
    )
}