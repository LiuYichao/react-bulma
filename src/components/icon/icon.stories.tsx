import React, { FC } from 'react';
import Icon from './icon';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ColorEnum } from '../common/ColorEnum';

export default { title: 'Icon', component: Icon };

export const Basic: FC = () => {
    return (
        <Icon IconDefinition={faEdit} color={ColorEnum.info}></Icon>
    );
};