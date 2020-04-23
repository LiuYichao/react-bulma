import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import clsx from 'clsx';

export interface ColumnProps extends React.Props<HTMLDivElement> {
    span?: number,
    className?: string
}

const useStyles = makeStyles({
    column: props => ({
    }),
});
const Column = React.forwardRef((props: ColumnProps, ref?: React.Ref<HTMLDivElement>) => {

    const {
        children,
        className,
        span = 0
    } = props;

    const classes = useStyles();
    const columnSpan = span > 0 ? `is-${span}` : false;

    return (
        <>
            <div className={clsx(classes, columnSpan, className)}>
                {children}
            </div>
        </>
    )
});

export default Column;