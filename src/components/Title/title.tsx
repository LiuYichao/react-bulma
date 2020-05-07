import React, { CSSProperties } from "react";
import clsx from "clsx";

export interface titleProps extends React.Props<HTMLElement> {
    className?: string,
    style?: CSSProperties
}

const Title = React.forwardRef((props: titleProps, ref?: React.Ref<HTMLElement>) => {

    const { children, className, style } = props;

    return (
        <>
            <h1 className={clsx('title', className)} style={style}>
                {children}
            </h1>
        </>
    );
});

export default Title;