import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function EmptyBasket() {

    const classes = useStyles();


    return (
        <div className="ShoppingBasket">
            <div className = "empty_cart">
                <Alert className = ""  severity="info">
                    <AlertTitle>Empty Cart</AlertTitle>
                </Alert>
            </div>
        </div>
    )
}

export default EmptyBasket
