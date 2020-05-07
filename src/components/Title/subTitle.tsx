import React, { CSSProperties } from "react";
import clsx from "clsx";

export interface subTitleProps extends React.Props<HTMLElement> {
    className?: string,
    style?: CSSProperties
}

const SubTitle = React.forwardRef((props: subTitleProps, ref?: React.Ref<HTMLElement>) => {

    const { children, className, style } = props;

    return (
        <>
            <h2 className={clsx('subtitle', className)} style={style}>
                {children}
            </h2>
        </>
    );
});

export default SubTitle;