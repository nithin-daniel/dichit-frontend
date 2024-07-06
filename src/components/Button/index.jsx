import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const CustomButton = (props) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained">{props.name}</Button>
        </Stack>
    );
}

export default CustomButton;