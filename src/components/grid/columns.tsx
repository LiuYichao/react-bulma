import React from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import './styles.scss';

export interface ColumnsProps extends React.Props<HTMLDivElement> {
    Direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
}


const useStyles = makeStyles({
    columns: (props: ColumnsProps) => {
        return {
            flexDirection: props.Direction
        }
    }
});
const Columns = React.forwardRef((props: ColumnsProps, ref?: React.Ref<HTMLDivElement>) => {

    const {
        children,
    } = props;
    const classes = useStyles(props);
    return (
        <>
            <div className={clsx(classes, classes.columns)}>
                {children}
            </div>
        </>
    )
});

export default Columns;