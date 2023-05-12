import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';

export default function ProgramCard({ program }) {
    return (
        <Card sx={{

            width: 350,
            display: "flex",
            flexWrap: "nowrap",
            m: 3,
            borderRadius: 2,
            justifyContent: "center",
            color: '#dde4eb',
            marginTop: 10

        }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{
                        color: '#315050'
                    }}>
                        {program.title}
                    </Typography>
                    <Typography paragraph sx={{
                        marginTop: 2,
                        color: '#315099',

                    }}>
                        {program.describe}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{
                        border: 1,
                        borderRadius: '2rem 2rem 2rem 2rem',

                        '&:hover': {
                            bgcolor: 'primary.main',
                            color: '#dde4eb'
                        },
                        paper: 'warning.light'

                    }} >
                        <Link to='/application' style={{ textDecoration: 'none', color: '#1976d2' }}>Applicate</Link></Button>
                    <Button size="small" sx={{
                        border: 1,
                        borderRadius: '2rem 2rem 2rem 2rem',
                        color: 'text.secondary',
                        '&:hover': {
                            bgcolor: 'text.secondary',
                            color: '#dde4eb'
                        },
                        paper: 'warning.light'

                    }} href={program.url} target="_blank" >Learn More</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}