import React, { ReactNode } from 'react';
import { styled, makeStyles } from '@material-ui/styles';
import { Columns, Column } from '../grid';
import { ColorEnum } from '../common/ColorEnum';
import { faFileAlt, faCode, faCopy } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/icon';
import { relative } from 'path';




export interface CodeBoxProps {
    children: ReactNode,
    title: string,
    Desc: string
}

const useStyles = makeStyles({
    root: {
        backgroundColor: '#00d1b2',
        borderRadius: '4px',
        color: '#ffffff'
    },
});


export const CodeBox = (props: CodeBoxProps) => {
    const { children, title, Desc } = props;

    const CodeBoxDemo = styled(Column)({
        borderBottom: '1px solid #f0f0f0',
        padding:' 1.5rem .75rem 1.5rem 1.5rem',
    });

    const CodeBoxTitle = styled(Column)({
        color: '#777',
        display: 'flex',
        position: 'relative',
        paddingTop: 0,
        top: '-12px',
        paddingLeft: '1.5rem',
        paddingBottom: '0',
        fontSize: '14px'
    });

    const CodeIcon = styled('div')({
        display: 'flex',
        backgroundColor: '#fff'
    })

    const CodeBoxDesc = styled(Column)({
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '0',
    });

    const CodeBoxActions = styled(Column)({
        textAlign: 'center',
    });

    return (
        <>
            <div>
                <Columns>
                    <CodeBoxDemo>{children}</CodeBoxDemo>
                </Columns>
                <Columns Direction={'column'}>
                    <CodeBoxTitle>
                        <CodeIcon>
                            <p>{title}</p>
                            <Icon IconDefinition={faFileAlt}></Icon>
                        </CodeIcon>
                    </CodeBoxTitle>
                    <CodeBoxDesc>
                        <p>{Desc}</p>
                    </CodeBoxDesc>
                    <CodeBoxActions>
                        <Icon IconDefinition={faCode}></Icon>
                        <Icon IconDefinition={faCopy}></Icon>
                    </CodeBoxActions>
                </Columns>
            </div>
        </>
    );
}