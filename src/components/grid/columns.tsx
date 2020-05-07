import React from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import './styles.scss';
import { BreakpointEnum } from './columnSizes';

export interface ColumnsProps extends React.Props<HTMLDivElement> {
    Direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
    id?: string,
    breakpoint?: BreakpointEnum,
    gap?: number
}


const useStyles = makeStyles({
    columns: (props: ColumnsProps) => {
        return {
            flexDirection: props.Direction,
        }
    }
});
const Columns = React.forwardRef((props: ColumnsProps, ref?: React.Ref<HTMLDivElement>) => {

    const {
        children,
        id,
        breakpoint = '',
        gap = null
    } = props;
    const classes = useStyles(props);
    return (
        <>
            <div id={id} className={clsx(classes, classes.columns, clsx(
                {
                    [`is-${breakpoint}`]: breakpoint,
                    [`is-${gap}`]: gap !== undefined ? true : false,
                    'is-variable': gap !== undefined ? true : false
                }
            ))}>
                {children}
            </div>
        </>
    )
});

export default Columns;