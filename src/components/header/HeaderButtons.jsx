import { useState } from 'react';
import { Dialog, DialogContent, Box, Button, makeStyles, Typography, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Login from '../login/Login';

const useStyle = makeStyles({
    login: {
        background: 'white',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center'
        }
    },
    container: {
        display: 'flex'
    }
})

const HeaderButtons = () => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);
    const openLoginDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            <Button variant="contained" onClick={() => openLoginDialog()} className={classes.login}>Login</Button>
            <Typography style={{marginTop: 5}}>More</Typography>
            <Box className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
                <DialogContent />
                <Dialog open={open} />
            </Box>
        </Box>
    )
}

export default HeaderButtons;