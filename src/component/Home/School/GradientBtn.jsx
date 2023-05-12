import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function GradientBtn({ name, alt }) {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained"
                sx={{
                    borderRadius: 2,
                    bgcolor: 'warning.dark',
                    marginInline: 1
                }}
            >
                <Link to={name} style={{ textDecoration: 'none', color: '#315050' }}>{alt}</Link>
            </Button>

        </Stack >
    );
}