import { useState, useEffect } from "react";
import { cbs, type CB } from "../../../db";
import Gallery from "./components/Gallery";
import * as S from "./styled";
import Modal from "./components/Modal";

export const CidadeBerco: React.FC = () => {
    const [selectedCB, setSelectedCB] = useState<CB | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

        // Handle keyboard navigation
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isModalOpen && selectedCB) {
                const currentIndex = cbs.indexOf(selectedCB);
                if (event.key === "ArrowRight") {
                    if (currentIndex < cbs.length - 1) {
                        setSelectedCB(cbs[currentIndex + 1]);
                    }
                } else if (event.key === "ArrowLeft") {
                    if (currentIndex > 0) {
                        setSelectedCB(cbs[currentIndex - 1]);
                    }
                }
            }
        };
    
        useEffect(() => {
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
            };
        }, [selectedCB, isModalOpen]);
    

    return (
        <S.CidadeBercoStyled>
            <S.ContainerStyled>
                <Gallery
                    setSelectedCB={(cb) => {
                        setSelectedCB(cb);
                        setIsModalOpen(true);
                    }}
                />
                {selectedCB && (
                    <Modal
                        cb={selectedCB} 
                        closeModal={() => {
                            setSelectedCB(null);
                        }} 
                    />
                )}
            </S.ContainerStyled>
        </S.CidadeBercoStyled>
    );
};