import { Box, makeStyles } from '@material-ui/core'
import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner.jsx';
import Slide from './Slide.jsx';
import products from '../../constants/product';
import MidSlide from '../home/MidSlide'
import MidSection from '../home/MidSection';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    rightWrapper: {

    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Home;