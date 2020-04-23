import React from "react";
import { ColorEnum } from "../common/ColorEnum";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import clsx from "clsx";
import './styles.scss';


export interface IconProps extends React.Props<HTMLSpanElement> {
    IconDefinition: IconDefinition,
    Color?: ColorEnum
}

const Icon = React.forwardRef((props: IconProps, ref?: React.Ref<HTMLSpanElement>) => {

    const {
        IconDefinition,
        Color = ''
    } = props;

    return (
        <>
            <span className={clsx('icon', Color)}>
                <FontAwesomeIcon icon={IconDefinition} />
            </span>
        </>
    );
});

export default Icon;

