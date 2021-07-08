
import { AppBar, Toolbar, makeStyles, Typography, Box } from '@material-ui/core';

import SearchBar from './SearchBar.jsx';

import HeaderButtons from './HeaderButtons.jsx';

const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55

    },
    logo: {
        width: 75

    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '20%',
        lineHeight: 0
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    }
})

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Box className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                    <Typography className={classes.subHeading}>Explore Plus</Typography>
                    <img src={subURL} className={classes.subURL} />
                    </Box>
                </Box>
                <SearchBar />   
                <HeaderButtons />  
            </Toolbar>
        </AppBar>
    )   

}

export default Header;
