import React from 'react'
import clsx from 'clsx';
import'./styles.scss';

export interface DrawerProps extends React.Props<HTMLDivElement> {
    open?: boolean
}

const Drawer = React.forwardRef((props: DrawerProps, ref?: React.Ref<HTMLDivElement>) => {
    const {
        open = false,
        children
    } = props;

    return (
        <>
            <div>
                <div className={clsx('modal', open && 'is-active')}>
                    <div className={clsx('modal-background')}></div>
                    <div className={clsx('modal-content')}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
});


export default Drawer;