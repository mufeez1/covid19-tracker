import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NumberFormat from'react-number-format';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));

export default function GlobalData() {
    const classes = useStyles();
    const [data, setData] = useState();
    useEffect(() => {
        async function GlobalData() {
            const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const dataApi = await response.json();
            console.log(dataApi);
            setData(dataApi);

        }
        GlobalData();
    }, [])

    return (
        <div className={classes.root}>

            <Paper elevation={3} style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold', paddingTop: '10px' }}>
                Global Cases
                <br/>
                <h1> <NumberFormat value={data && data.results && data.results[0].total_cases} displayType={'text'} thousandSeparator={true}  />
                 </h1>
  
            </Paper>
            <Paper elevation={3} style={{ backgroundColor: 'yellow', color: 'white', fontWeight: 'bold', paddingTop: '10px' }}>
                Active
                <h1> <NumberFormat value={data && data.results && data.results[0].total_active_cases+data.results[0].total_unresolved} displayType={'text'} thousandSeparator={true}  />
                 </h1>
          </Paper>
            <Paper elevation={3} style={{ backgroundColor: 'yellowGreen', color: 'white', fontWeight: 'bold', paddingTop: '10px' }}>
                Recoverd
                <h1> <NumberFormat value={data && data.results && data.results[0].total_recovered} displayType={'text'} thousandSeparator={true}  />
                 </h1>
               
          </Paper>
            <Paper elevation={3} style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', paddingTop: '10px' }}>
                Deaths
                <h1> <NumberFormat value={data && data.results && data.results[0].total_deaths+data.results[0].total_new_deaths_today} displayType={'text'} thousandSeparator={true}  />
                 </h1>
                
          </Paper>
        </div>
    );
}
