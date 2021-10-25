import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import mahatma from '../../Assets/mahatma.jpg'
import portal from '../../Assets/nationalportal.png'
import India from '../../Assets/incredibleindia.png'
import Ministry from '../../Assets/ministry.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
        backgroundColor: '#999999',
        '& > *': {
        },
    },
    image: {
        backgroundColor: '#999999',
    }
}));

export default function Images() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.image}>
                <Grid container spacing={5}>
                    <Grid item xl={6} xs={6}>
                        <img src={mahatma} className="mahatma" alt="mahatma" width="50%" height="100%" />
                    </Grid>
                    <Grid item xl={6} xs={6}>
                        <img src={portal} className="portal" alt="portal" width="30%" height="50%" />
                    </Grid>
                    <Grid item xl={6} xs={6}>
                        <img src={India} className="india" alt="india" width="50%" height="50%" />
                    </Grid>
                    <Grid item xl={6} xs={6}>
                        <img src={Ministry} className="ministry" alt="ministry" width="50%" height="100%" />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
