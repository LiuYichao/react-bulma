import React, { CSSProperties, ReactElement } from 'react';
import './styles.scss';
import clsx from 'clsx';

export interface ButtonProps extends React.Props<HTMLButtonElement> {
    id?: string,
    color?: string,
    className?: string,
    style?: CSSProperties,
    light?: boolean,
    size?: 'small' | 'normal' | 'medium' | 'large',
    fullwidth?: boolean,
    rounded?: boolean,
    loading?: boolean,
    disabled?: boolean,
    outlined?: boolean,
    remove?: boolean,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = React.forwardRef((props: ButtonProps, ref?: React.Ref<HTMLButtonElement>) => {

    const {
        children,
        id,
        className,
        color = '',
        light = false,
        fullwidth = false,
        disabled = false,
        outlined = false,
        style = {},
        size = '',
        rounded = false,
        loading = false,
        remove = false,
        startIcon = null,
        endIcon = null,
        onClick = () => { }
    } = props;
    const child = startIcon || endIcon ? <span>{children}</span> : children;
    return (
        <>
            <button id={id} className={
                clsx(
                    className, color,
                    {
                        'is-light': light,
                        'is-rounded': rounded,
                        'is-fullwidth': fullwidth,
                        'is-loading': loading,
                        'is-outlined': outlined,
                        'delete': remove,
                        'button': !remove,
                        [`is-${size}`]: size
                    }
                )}
                style={style} disabled={disabled} onClick={onClick} ref={ref}>
                {startIcon}
                {child}
                {endIcon}
            </button>
        </>
    );
});

export default Button;