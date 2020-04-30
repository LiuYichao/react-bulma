import React, { FC } from 'react';
import Icon from './icon';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { TextColorEnum } from '../common/ColorEnum';
import { CodeBox } from '../codeBox/codeBox';

export default { title: 'Icon', component: Icon };

export const Basic: FC = () => {
    return (
        <CodeBox title={'基本使用'} Desc={'基本使用'}>
            <Icon IconDefinition={faEdit} Color={TextColorEnum.info}></Icon>
        </CodeBox>

    );
};