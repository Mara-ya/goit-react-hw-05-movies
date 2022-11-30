import { Box } from "components/Box";
import { useState } from "react"
import { Input, SubmitBtn } from "./SearchBar.styled";
import PropTypes from 'prop-types';

export default function SearchBar({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('')

    function handleChange(e) {
        setSearchQuery(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(searchQuery);
        reset();
    }

    function reset() {
        setSearchQuery('')
    }

    return(
        <Box as="div" p={3}>
            <form onSubmit={handleSubmit}>
                <Input type="text" 
                    value={searchQuery} 
                    onChange={handleChange}
                />
                <SubmitBtn type="submit" > Submit </SubmitBtn>
            </form>
        </Box>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}