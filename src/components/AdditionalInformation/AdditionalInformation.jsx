import { Link, useLocation } from "react-router-dom";
import { Item, Wrapper } from "./AdditionalInformation.styled";

const navItem = [
    {href: 'cast', text: 'Cast'},
    {href: 'reviews', text: 'Reviews'},
];

export const AdditionalInformation = () => {
    const location = useLocation();
    const backLink = location.state?.from ?? "/movies"

    return(
        <>
            <Wrapper>
                {navItem && (
                    <ul>
                        {navItem.map(({href, text}) => (
                            <Item key={href}>
                                <Link to={href} state={{ from: backLink}}>
                                    {text}
                                </Link>
                            </Item>
                        ))}
                    </ul>)}
            </Wrapper>
        </>
    )
}
