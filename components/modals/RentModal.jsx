'use client'

import { useContext, useMemo, useState } from "react";
import { UiContext } from "../../contexts/ui/UiProvider";
import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../navBar/Categories";
import Image from "next/image";

// create an enum for the steps
const STEPS = {
    CATEGORY: 0,
    LOCATION: 1,
    INFO: 2,
    IMAGES: 3,
    DESCRIPTION: 4,
    PRICE: 5,
}

const RentModal = ({ }) => {

    const [step, setStep] = useState(STEPS.CATEGORY);

    const onBack = () => {
        setStep((prev) => prev - 1);
    }

    const onNext = () => {
        setStep((prev) => prev + 1);
    }


    // const actionLabel = step === STEPS.PRICE ? "Publicar" : "Siguiente"; // we are gonna use "useMemo" here so the value is not calculated every time the component renders
    const actionLabel = useMemo(() => {
        return step === STEPS.PRICE ? "Publicar" : "Siguiente";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        return step === STEPS.CATEGORY ? undefined : "Atras";
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading title={'Cuál de estos describe mejor tu casa?'} subtitle={'Elige una categoría'} />
            <div
                className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-3
        max-h-[50vh]
        overflow-y-auto
        "
            >

                {
                    categories.map((item, index) => (
                        <div key={item.label} className="col-span-1">{item.label}</div>))}

            </div>
        </div>
    );





    const { RentModalisOpen, onCloseRentModal, onOpenRentModal } = useContext(UiContext);
    return (
        <Modal
            title="Airbnb your home"
            isOpen={RentModalisOpen}
            onClose={onCloseRentModal}
            onOpen={onOpenRentModal}
            onSubmit={
                step === STEPS.PRICE ? () => { } : onNext
            }
            actionLabel={actionLabel}
            disabled={false}
            secondaryAction={
                step === step === STEPS.LOCATION || step === STEPS.INFO || step === STEPS.IMAGES || step === STEPS.DESCRIPTION || step === STEPS.PRICE ? onBack : undefined
            }
            secondaryActionLabel={secondaryActionLabel}
            body={bodyContent}
        />

    )
};

export default RentModal;