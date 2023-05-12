import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained"
                type='submit'
                endIcon={<SendIcon />}
                sx={{
                    marginTop: 5,
                    width: 150,
                    bgcolor: 'warning.dark',
                    "&:hover": {
                        bgcolor: 'warning.light'
                    }
                }}
            >
                Submit
            </Button>
        </Stack>
    );
}