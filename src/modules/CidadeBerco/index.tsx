import { useState } from "react";
import { type CB } from "../../../db";
import Gallery from "./components/Gallery";
import * as S from "./styled";
import Modal from "./components/Modal";

export const CidadeBerco: React.FC = () => {
    const [selectedCB, setSelectedCB] = useState<CB | null>(null);

    return (
        <S.CidadeBercoStyled>
            <S.ContainerStyled>
                <Gallery
                    setSelectedCB={(cb) => {
                        setSelectedCB(cb);
                    }}
                />
                {selectedCB && (
                    <Modal
                        cb={selectedCB} 
                        closeModal={() => {
                            setSelectedCB(null);
                        }} 
                        setSelectedCB={setSelectedCB} 
                    />
                )}
            </S.ContainerStyled>
        </S.CidadeBercoStyled>
    );
};