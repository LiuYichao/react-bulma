import React from 'react';
import clsx from 'clsx';
import { SizeEnum, OffsetEnum, BreakpointEnum } from './columnSizes';

export interface ColumnProps extends React.Props<HTMLDivElement> {
    className?: string,
    size?: SizeEnum,
    col?: number, // Columns System
    offset?: OffsetEnum,
    narrow?: boolean,
    breakpoint?: BreakpointEnum,
    touch?: ColumnObj
    mobile?: ColumnObj
    tablet?: ColumnObj
    desktop?: ColumnObj
    widescreen?: ColumnObj
    fullhd?: ColumnObj
}

export interface ColumnObj {
    size?: SizeEnum,
    offset?: OffsetEnum,
    narrow?: boolean
}

const Column = React.forwardRef((props: ColumnProps, ref?: React.Ref<HTMLDivElement>) => {

    const {
        children,
        className,
        size = '',
        col = '',
        narrow = undefined,
        offset = OffsetEnum.EMPTY,
        touch,
        mobile,
        tablet,
        desktop,
        widescreen,
        fullhd
    } = props;


    return (
        <>
            <div className={clsx('column', className, {
                [`is-${size}`]: size,
                [`is-${touch?.size}-mobile`]: touch?.size,
                [`is-${mobile?.size}-mobile`]: mobile?.size,
                [`is-${tablet?.size}-tablet`]: tablet?.size,
                [`is-${desktop?.size}-desktop`]: desktop?.size,
                [`is-${widescreen?.size}-widescreen`]: widescreen?.size,
                [`is-${fullhd?.size}-fullhd`]: fullhd?.size,
                [`is-offset-${offset}`]: offset,
                [`is-offset-${touch?.offset}-mobile`]: touch?.offset,
                [`is-offset-${mobile?.offset}-mobile`]: mobile?.offset,
                [`is-offset-${tablet?.offset}-tablet`]: tablet?.offset,
                [`is-offset-${desktop?.offset}-desktop`]: desktop?.offset,
                [`is-offset-${widescreen?.offset}-widescreen`]: widescreen?.offset,
                [`is-offset-${fullhd?.offset}-fullhd`]: fullhd?.offset,
                'is-narrow': narrow,
                'is-narrow-touch': touch?.narrow,
                'is-narrow-mobile': mobile?.narrow,
                'is-narrow-tablet': tablet?.narrow,
                'is-narrow-desktop': desktop?.narrow,
                'is-narrow-widescreen': widescreen?.narrow,
                'is-narrow-fullhd': fullhd?.narrow,
                [`is-${col}`]: col,
            })}>
                {children}
            </div>
        </>
    )
});

export default Column;