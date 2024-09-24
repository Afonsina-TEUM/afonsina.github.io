import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
    return (
        <S.SocialsStyled {...rest}>
            <S.SocialsList>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://facebook.com/tunaafonsina"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Facebook</p>
                        <Icon iconData="facebook" alt="facebook icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://instagram.com/tunaafonsina"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Instagram</p>
                        <Icon iconData="instagram" alt="instagram icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
            </S.SocialsList>
        </S.SocialsStyled>
    );
};
