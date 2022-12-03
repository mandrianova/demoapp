import React from "react";

import {Outlet} from 'react-router-dom';

import {Container} from '@mui/material';
import {Header, Footer} from '../index';
import styles from './Root.module.css'


export default function Root(props) {
    console.log(props)

    return (
        <>
            <Header />
              <Container maxWidth={'lg'} className={styles.page}>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}



