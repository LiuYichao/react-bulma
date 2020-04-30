import React from "react";
import { TextColorEnum } from "../common/ColorEnum";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import clsx from "clsx";
import './styles.scss';


export interface IconProps extends React.Props<HTMLSpanElement> {
    icon: IconDefinition,
    Color?: TextColorEnum
}

const Icon = React.forwardRef((props: IconProps, ref?: React.Ref<HTMLSpanElement>) => {

    const {
        icon,
        Color = ''
    } = props;
    return (
        <>
            <span className={clsx('icon', Color)}>
                <FontAwesomeIcon icon={icon} />
            </span>
        </>
    );
});

export default Icon;


