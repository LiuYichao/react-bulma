import React, { FC } from 'react';
import Drawer from './drawer';

export default { title: 'Drawer', component: Drawer };

export const Basic: FC = () => {
    return (
        <>
            <Drawer></Drawer>
        </>
    );
};