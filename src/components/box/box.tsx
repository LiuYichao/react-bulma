import React, { CSSProperties } from 'react';
import './styles.scss';
import clsx from 'clsx';

export interface boxProps extends React.Props<HTMLDivElement> {
    className?: string,
    style?: CSSProperties
}

const Box = React.forwardRef((props: boxProps, ref?: React.Ref<HTMLDivElement>) => {

    const {
        children,
        className
    } = props;
    return (
        <>
            <div className={clsx('box', className)} style={props.style}>
                {children}
            </div>
        </>
    );
})

export default Box;