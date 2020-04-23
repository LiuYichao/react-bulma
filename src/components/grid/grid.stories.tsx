import React, { FC } from 'react';
import Columns from './columns';
import Column from './column';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

export default { title: 'Grid', component: Columns };



const useStyles = makeStyles({
    root: {
        backgroundColor: '#00d1b2',
        borderRadius: '4px',
        color: '#ffffff',
        fontWeight: 600,
        padding: '1.25rem 0',
        position: 'relative',
        textAlign: 'center',
    },
});


export const Basic: FC = () => {

    const classes = useStyles();
    return (
        <Columns>
            <Column>
                <p className={clsx(classes.root)}>First column</p>
            </Column>
            <Column>
                <p className={clsx(classes.root)}>Second column</p>
            </Column>
            <Column>
                <p className={clsx(classes.root)}>Third column</p>
            </Column>
            <Column>
                <p className={clsx(classes.root)}>Fourth column</p>
            </Column>
        </Columns>
    );
};