import React, { CSSProperties, ReactElement } from 'react';
import { makeStyles } from '@material-ui/styles';
import './styles.scss';
import clsx from 'clsx';

export interface ButtonProps extends React.Props<HTMLButtonElement> {
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
}

const Button = React.forwardRef((props: ButtonProps, ref?: React.Ref<HTMLButtonElement>) => {

    const {
        children,
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
        endIcon = null
    } = props;

    const child = startIcon || endIcon ? <span>{children}</span> : children;
    return (
        <>
            <button className={
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
                style={style} disabled={disabled}>
                {startIcon}
                {child}
                {endIcon}
            </button>
        </>
    );
});

export default Button;