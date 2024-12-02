import type { FC } from "react";
import { BadgeStyled } from "./styled";

type BadgeProps = {
    children: any;
    style: any;
};

/**
 * Badge component
 */
export const Badge: FC<BadgeProps> = ({
    style,
    children
}) => {
    return (
        <BadgeStyled style={style}>
            {children}
        </BadgeStyled>
    );
};
