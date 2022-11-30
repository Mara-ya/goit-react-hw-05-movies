import { Link } from "react-router-dom";
import { Item, Wrapper } from "./AdditionalInformation.styled";

const navItem = [
    {href: 'cast', text: 'Cast'},
    {href: 'reviews', text: 'Reviews'},
];

export const AdditionalInformation = () => {
    return(
        <>
            <Wrapper>
                {navItem && <ul>{navItem.map(({href, text}) => <Item key={href}><Link to={href} >{text}</Link></Item>)}</ul>}
            </Wrapper>
        </>
    )
}
