import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">Afonsina</a>
                    </li>
                    <li>
                        <a href="/historia">História</a>
                    </li>
                    <li>
                        <a href="/traje">Traje</a>
                    </li>
                    <li>
                        <a href="/brasao">Brasão</a>
                    </li>
                    <li>
                        <a href="/afonsinos">Afonsinos</a>
                    </li>
                    <li>
                        <a href="/cidade-berco">Cidade Berço</a>
                    </li>
                    <li>
                        <a href="/contactos">Contactos</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
