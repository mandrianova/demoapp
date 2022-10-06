import React from 'react';
import classes from './AboutPage.module.css';
import cn from "classnames";

export default function AboutPage() {
    return (<div className={cn(classes.root, 'my-3', 'mx-3', classes.test)}>About Page</div>)
}