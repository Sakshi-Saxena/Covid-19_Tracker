import { Grid, CardContent, Box, Typography, Card, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyle = makeStyles({
    header: {
        background: '#e8e8e8',
        padding: 10
    }
})

const CardComponent = ({cardTitle, value, desc, lastUpdate}) => { 
    const classes = useStyle();
    return (
        <Grid component={Card} style={{margin:20, borderBottom: '12px solid #ffff03'}}>
            <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={3} seperator="," />
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    );
}

export default CardComponent;