import {Box} from '@chakra-ui/react';

export default function Loader({ show, props }) {
    return show ? <Box className="loader" {...props}/> : null;
}