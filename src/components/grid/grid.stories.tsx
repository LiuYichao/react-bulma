import React, { FC, useState } from 'react';
import Columns from './columns';
import Column from './column';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { CodeBox } from '../codeBox/codeBox';
import { SizeEnum, OffsetEnum, BreakpointEnum } from './columnSizes';
import Box from '../box/box';
import Title from '../Title/title';
import Button from '../button/button';

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
    notification: {
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        color: '#7a7a7a',
        fontWeight: 600,
        padding: ' 1.25rem 0',
        position: 'relative',
        textAlign: 'center'
    },
    click: {
        margin: '0 0.1rem 0 0.1rem'
    }
});




export const Basic: FC = () => {

    const classes = useStyles();
    return (
        <CodeBox title={'基本使用'} Desc={'栅格基本使用'}>
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
        </CodeBox>
    );
};

export const SizeByName: FC = () => {
    const classes = useStyles();
    return (
        <CodeBox title={'Sizes'} Desc={'you can change the size of a single column'}>
            {
                Object.values(SizeEnum).map((e) =>
                    <Columns key={e}>
                        <Column size={e}>
                            <p className={clsx(classes.root)}>{e}</p>
                        </Column>
                        <Column>
                            <p className={clsx(classes.notification)}>Auto</p>
                        </Column>
                        <Column >
                            <p className={clsx(classes.notification)}>Auto</p>
                        </Column>
                    </Columns>
                )
            }
        </CodeBox>
    );
};

export const SizeBy12ColumnsSystem: FC = () => {
    const classes = useStyles();
    return (
        <CodeBox title={'12 columns system'} Desc={'As the grid can be divided into 12 columns, there are size classes for each division'}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) =>
                    <Columns key={`cols-${e}`}>
                        {
                            <Column key={`col1-${e}`} col={e}>
                                <p className={clsx(classes.root)}>{`is-${e}`}</p>
                            </Column>
                        }
                        {
                            [...Array(12 - e)].map(
                                (col2, index) =>
                                    <Column col={1} key={`col2-${index}`}>
                                        <p className={clsx(classes.notification)}>{1}</p>
                                    </Column>
                            )
                        }
                    </Columns>
                )
            }
        </CodeBox>
    );
};

export const Offset: FC = () => {
    const classes = useStyles();
    return (
        <CodeBox title={'Offset'} Desc={'you can also use offset modifiers'}>
            {
                <>
                    <Columns>
                        <Column size={SizeEnum.HALF} offset={OffsetEnum.ONEQUARTER}>
                            <p className={clsx(classes.root)}>
                                HALF<br />
                                OFFSET-ONEQUARTER<br />
                            </p>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column size={SizeEnum.THREEFIFTHS} offset={OffsetEnum.ONEFIFTH}>
                            <p className={clsx(classes.root)}>
                                THREEFIFTHS<br />
                                OFFSET-ONEQUARTER<br />
                            </p>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column col={4} offset={OffsetEnum.EIGHT}>
                            <p className={clsx(classes.root)}>
                                4<br />
                                OFFSET-EIGHT<br />
                            </p>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column col={11} offset={OffsetEnum.ONE}>
                            <p className={clsx(classes.root)}>
                                1<br />
                                OFFSET-ONE<br />
                            </p>
                        </Column>
                    </Columns>
                </>
            }
        </CodeBox>
    );
};


export const Narrow: FC = () => {

    return (
        <CodeBox title={'Narrow column'} Desc={'If you want a column to only take the space it needs.'}>
            <Columns>
                <Column narrow>
                    <Box style={{ width: 200 }}>
                        <p>Narrow column</p>
                        <p>This column is only 200px wide.</p>
                    </Box>
                </Column>
                <Column>
                    <Box>
                        <p>Flexible column</p>
                        <p>This column will take up the remaining space available.</p>
                    </Box>
                </Column>
            </Columns>
        </CodeBox>
    );
};

export const Responsiven: FC = () => {
    const classes = useStyles();
    return (
        <CodeBox title={'Columns responsiveness'} Desc={'Handle different column layouts for each breakpoint.'}>
            <Box>
                <Title>MOBILE</Title>
                <Columns breakpoint={BreakpointEnum.MOBILE}>
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
            </Box>
            <Box>
                <Title>TABLET</Title>
                <Columns breakpoint={BreakpointEnum.TABLET}>
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
            </Box>
            <Box>
                <Title>DESKTOP</Title>
                <Columns breakpoint={BreakpointEnum.DESKTOP}>
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
            </Box>
        </CodeBox>
    );
};

export const ColumnSizesPerBreakpoint: FC = () => {
    const classes = useStyles();
    return (
        <CodeBox title={'Different column sizes per breakpoint'} Desc={'You can define a column size for each viewport size: mobile, tablet, and desktop.'}>
            <Columns breakpoint={BreakpointEnum.MOBILE}>
                <Column
                    mobile={{ size: SizeEnum.THREEQUARTERS }}
                    tablet={{ size: SizeEnum.TWOTHIRDS }}
                    desktop={{ size: SizeEnum.HALF }}
                    widescreen={{ size: SizeEnum.ONETHIRD }}
                    fullhd={{ size: SizeEnum.ONEQUARTER }}
                >
                    <p className={clsx(classes.root)}>
                        is-three-quarters-mobile<br />
                        is-two-thirds-tablet<br />
                        is-half-desktop<br />
                        is-one-third-widescreen<br />
                        is-one-quarter-fullhd<br />
                    </p>
                </Column>
                <Column>
                    <p className={clsx(classes.root)}>2</p>
                </Column>
                <Column>
                    <p className={clsx(classes.root)}>3</p>
                </Column>
                <Column>
                    <p className={clsx(classes.root)}>4</p>
                </Column>
            </Columns>
        </CodeBox>
    );
};

export const Nested: FC = () => {
    const classes = useStyles();

    return (
        <>
            <Columns>
                <Column size={SizeEnum.HALF}>
                    <p className={clsx(classes.root)}>First Column</p>
                    <Columns>
                        <Column size={SizeEnum.ONETHIRD}>
                            <p className={clsx(classes.notification)}>First Nested Column</p>
                        </Column>
                        <Column>
                            <p className={clsx(classes.notification)}>Second Nested Column (auto)</p>
                        </Column>
                    </Columns>
                </Column>
                <Column size={SizeEnum.HALF}>
                    <p className={clsx(classes.notification)}>Second Column</p>
                    <Columns>
                        <Column size={SizeEnum.HALF}>
                            <p className={clsx(classes.notification)}>First Nested Column (Half)</p>
                        </Column>
                        <Column size={SizeEnum.ONEQUARTER}>
                            <p className={clsx(classes.notification)}>Second Nested Column (one-quarter)</p>
                        </Column>
                        <Column>
                            <p className={clsx(classes.notification)}>Third Nested Column (auto)</p>
                        </Column>
                    </Columns>
                </Column>
            </Columns>
        </>
    );
}

export const Gap: FC = () => {
    const classes = useStyles();

    const [gap, setGap] = useState<number>(3);
    const ref = React.createRef<HTMLButtonElement>();
    return (
        <>
            <CodeBox title={'Columns gap'} Desc={'Customize the gap between the columns.'}>
                <Columns>
                    <Column>
                        <p className={clsx(classes.root)}>Default gap</p>
                    </Column>
                    <Column>
                        <p className={clsx(classes.root)}>Default gap</p>
                    </Column>
                    <Column>
                        <p className={clsx(classes.root)}>Default gap</p>
                    </Column>
                    <Column>
                        <p className={clsx(classes.root)}>Default gap</p>
                    </Column>
                </Columns>
                <Columns gap={gap}>
                    <Column col={3}>
                        <p className={clsx(classes.root)}>Side</p>
                    </Column>
                    <Column col={9}>
                        <p className={clsx(classes.root)}>Main</p>
                    </Column>
                </Columns>
                <Columns gap={gap}>
                    <Column col={4}>
                        <p className={clsx(classes.root)}>Three columns</p>
                    </Column>
                    <Column col={4}>
                        <p className={clsx(classes.root)}>Three columns</p>
                    </Column>
                    <Column col={4}>
                        <p className={clsx(classes.root)}>Three columns</p>
                    </Column>
                </Columns>
                <Columns gap={gap}>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(e => (
                            <Column key={e} col={1}>
                                <p className={clsx(classes.root)}>{e}</p>
                            </Column>
                        ))
                    }
                </Columns>
                <Columns>
                    <Column>{
                        [0, 1, 2, 3, 4, 5, 6, 7, 8].map(e => (
                            <Button key={e} id={e+''} className={clsx(classes.click)} ref={ref} onClick={() => {
                                setGap(e);
                            }}>{`is-${e}`}</Button>
                        ))
                    }
                    </Column>
                </Columns>
            </CodeBox>
        </>
    );
}