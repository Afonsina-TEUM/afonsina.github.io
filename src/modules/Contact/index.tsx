import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+351 912 978 513"
                            target="_blank"
                        >
                            <h3>+351 912 978 513</h3>
                            <p>
                                Magister - Nuno Fernandes
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:tunaafonsina@gmail.com"
                            target="_blank"
                        >
                            <h3>tunaafonsina@gmail.com</h3>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Morada</h3>
                        <p>Rua de Francos</p>
                        <p>Edifício AAUM - Lugar da Veiga</p>
                        <p>4800-019 Guimarães</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
