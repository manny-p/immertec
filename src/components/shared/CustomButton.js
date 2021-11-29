import {Button} from '@chakra-ui/react';


const CustomButton = ({onClick, fontSize, size, hover, rest, children}) => {
    return (
        <Button
            onClick={onClick}
            fontSize={fontSize}
            _hover={hover}
            size={size}
            {...rest}
        >
            {children}
        </Button>
    )
}

export default CustomButton