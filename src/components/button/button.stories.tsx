import React, { FC } from 'react';
import Button from './button';
import { CodeBox } from '../codeBox/codeBox';
import { ColorEnum } from '../common/ColorEnum';
import { styled } from '@material-ui/styles';
import { Columns, Column } from '../grid';
import Icon from '../icon/icon';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';



const Div1 = styled('div')({
    '& *': {
        margin: '0 1rem'
    }
});

const Div2 = styled('div')({
    width: '100%',

    '& *': {
        margin: '1rem 0rem'
    }
});

export default { title: 'Button', component: Button };

export const Basic: FC = () => {
    return (
        <>
            <CodeBox title={'基本使用'} Desc={'基本使用'}>
                <Button>Button</Button>
            </CodeBox>
        </>
    );
};

export const Color: FC = () => {

    return (
        <>
            <CodeBox title={'颜色'} Desc={'颜色使用'}>
                <Columns Direction={'column'}>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.white}>White</Button>
                            <Button color={ColorEnum.light}>Light</Button>
                            <Button color={ColorEnum.dark}>Dark</Button>
                            <Button color={ColorEnum.black} >Black</Button>
                            <Button color={ColorEnum.text}>Text</Button>
                        </Div1>
                    </Column>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.primary}>Primary</Button>
                            <Button color={ColorEnum.link}>Link</Button>
                        </Div1>
                    </Column>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.info}>Info</Button>
                            <Button color={ColorEnum.success}>Success</Button>
                            <Button color={ColorEnum.warning}>Warning</Button>
                            <Button color={ColorEnum.danger}>Danger</Button>
                        </Div1>
                    </Column>
                </Columns>
            </CodeBox>
            <CodeBox title={'light'} Desc={`Each color now comes in its light version. 
            Simply append the modifier light to the color modifier to apply the light version of the button.`}>
                <Columns Direction={'column'}>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.primary} light={true}>Primary</Button>
                            <Button color={ColorEnum.link} light={true}>Link</Button>
                        </Div1>
                    </Column>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.info} light={true}>Info</Button>
                            <Button color={ColorEnum.success} light={true}>Success</Button>
                            <Button color={ColorEnum.warning} light={true}>Warning</Button>
                            <Button color={ColorEnum.danger} light={true}>Danger</Button>
                        </Div1>
                    </Column>
                </Columns>
            </CodeBox>
        </>
    );
};

export const Size: FC = () => {
    return (
        <>
            <CodeBox title={'size'} Desc={'The button comes in 4 different sizes'}>
                <Div1>
                    <Button size={'small'}>Small</Button>
                    <Button>Default</Button>
                    <Button size={'normal'}>Normal</Button>
                    <Button size={'medium'}>Medium</Button>
                    <Button size={'large'}>Large</Button>
                </Div1>
            </CodeBox>
        </>
    );
}

export const Displays: FC = () => {
    return (
        <>
            <CodeBox title={'Displays'} Desc={'fullwidth'}>
                <Div2>
                    <Button size={'small'} fullwidth={true}>Small</Button>
                    <Button size={'normal'} fullwidth={true}>Normal</Button>
                    <Button size={'medium'} fullwidth={true}>Medium</Button>
                    <Button size={'large'} fullwidth={true}>Large</Button>
                </Div2>
            </CodeBox>
        </>
    );
}

export const Rounded: FC = () => {
    return (
        <>
            <CodeBox title={'Rounded'} Desc={'Rounded buttons'} >
                <Columns Direction={'column'}>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.primary} rounded={true}>Primary</Button>
                            <Button color={ColorEnum.link} rounded={true}>Link</Button>
                        </Div1>
                    </Column>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.info} rounded={true}>Info</Button>
                            <Button color={ColorEnum.success} rounded={true}>Success</Button>
                            <Button color={ColorEnum.warning} rounded={true}>Warning</Button>
                            <Button color={ColorEnum.danger} rounded={true}>Danger</Button>
                        </Div1>
                    </Column>
                </Columns>
            </CodeBox>
        </>
    );
}

export const WithIcon: FC = () => {
    return (
        <>
            <CodeBox title={'With Font Awesome icons'} Desc={'Bulma React buttons can easily be enhanced by adding a Font Awesome icon'} >
                <Columns Direction={'column'}>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.success} startIcon={<Icon IconDefinition={faCheck} />}>Save</Button>
                            <Button color={ColorEnum.danger} endIcon={<Icon IconDefinition={faTimes} />}>Delete</Button>
                        </Div1>
                    </Column>
                </Columns>
            </CodeBox>
        </>
    );
}

export const Outlined: FC = () => {
    return (
        <>
            <CodeBox title={'Outlined'} Desc={'Outlined'} >
                <Columns Direction={'column'}>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.info} outlined={true}>Outlined</Button>
                            <Button color={ColorEnum.success} outlined={true}>Outlined</Button>
                            <Button color={ColorEnum.warning} outlined={true}>Outlined</Button>
                            <Button color={ColorEnum.danger} outlined={true}>Outlined</Button>
                        </Div1>
                    </Column>
                </Columns>
            </CodeBox>
        </>
    );
}

export const Loading: FC = () => {
    return (
        <>
            <CodeBox title={'loading'} Desc={'loading'} >
                <Columns Direction={'column'}>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.info} loading={true}>info</Button>
                            <Button color={ColorEnum.success} loading={true}>success</Button>
                            <Button color={ColorEnum.warning} loading={true}>warning</Button>
                            <Button color={ColorEnum.danger} loading={true}>danger</Button>
                        </Div1>
                    </Column>
                </Columns>
            </CodeBox>
        </>
    );
}

export const Disabled: FC = () => {
    return (
        <>
            <CodeBox title={'Disabled'} Desc={'disabled'} >
                <Columns Direction={'column'}>
                    <Column>
                        <Div1>
                            <Button color={ColorEnum.info} disabled={true}>Disabled</Button>
                            <Button color={ColorEnum.success} disabled={true}>Disabled</Button>
                            <Button color={ColorEnum.warning} disabled={true}>Disabled</Button>
                            <Button color={ColorEnum.danger} disabled={true}>Disabled</Button>
                        </Div1>
                    </Column>
                </Columns>
            </CodeBox>
        </>
    );
}

export const Delete: FC = () => {
    return (
        <>
            <CodeBox title={'Delete'} Desc={'Delete'} >
                <Columns Direction={'column'}>
                    <Column>
                        <Div1>
                            <Button size={'small'} remove={true}>Small</Button>
                            <Button remove={true}>Default</Button>
                            <Button size={'medium'} remove={true}>Medium</Button>
                            <Button size={'large'} remove={true}>Large</Button>
                        </Div1>
                    </Column>
                </Columns>
            </CodeBox>
        </>
    );
}