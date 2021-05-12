import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import logoEmpresa from "../../../elements/resources/images/logoEmpresa.svg";
import ButtonCard from "../../../elements/components/buttonCard";
import imageButtonOne from "../../../elements/resources/images/checkIcon.svg";
import imageButtonTwo from "../../../elements/resources/images/wrongIcon.svg";
import imageButtonThree from "../../../elements/resources/images/adjunto.svg";
import leftArrowIcon from "../../../elements/resources/images/leftArrowIcon.svg";

import rightArrowIcon from "../../../elements/resources/images/rightArrowIcon.svg"; 
import PdfBox from "../../../elements/components/pdfBox";
import CompanyField from "../../../elements/components/companyField";
import PdfModal from "../../../elements/components/pdfModal";

const fieldProps = {
  field1: {
    headline: "Nombre de la empresa",
    description: "PREVALENTWARE",
  },
  field2: {
    headline: "Razón Social",
    description: "PREVALENTWARE S.A.S",
  },
  field3: {
    headline: "Tipo de identificación",
    description: "NIT",
  },
  field4: {
    headline: "Identificación ",
    description: "901375150-4",
  },
  field5: {
    headline: "# de empleados",
    description: "1 - 10",
  },
};
const Company = (props) => {
  const [showModal, setShowModal] = useState(false); //estado de modal de adjuntos
  const [showModal1, setShowModal1] = useState(false); //posible funcionalidad de otro modal
  const [showModal2, setShowModal2] = useState(false); //posible funcionalidad de otro modal

  const buttonProps = {
    button1: {
      message: "Aprobar Empresa ",
      image: imageButtonOne,
      modalState: showModal2,
      setModalState: setShowModal2,
    },
    button2: {
      message: "Rechazar Empresa ",
      image: imageButtonTwo,
      modalState: showModal1,
      setModalState: setShowModal1,
    },
    button3: {
      message: "Ver archivos adjuntos ",
      image: imageButtonThree,
      modalState: showModal,
      setModalState: setShowModal,
    },
  };

  return (
    <div className={styles.container3}>
      <PdfModal showModal={showModal} setShowModal={setShowModal} />
      <div className=" flex flex-col ...  md:w-full w-11/12  ">
        <div className="font-semibold flex  pb-4 text-sm pt-4 md:pl-8 md:text-2xl">
          {" "}
          <span className="text-custom-blue-100 pr-1">Administración </span> /
          Aprobación de Empresas
        </div>
        <div className="flex flex-col-reverse md:flex-col w-full justify-center md:w-8/12 self-center items-center justify-items-center self-start">
          <div className="grid grid-cols-1  md:grid-cols-12 w-full text-left rounded-lg shadow-lg bg-white items-center md:justify-center">
            <div className="hidden md:grid md:col-span-4 self-center "></div>
            <div className="grid col-span-12 md:col-span-4 items-center justify-center p-6 m-5 bg-custom-gray-700 ">
              <img className="" src={logoEmpresa} />
            </div>
            <div className="hidden md:grid md:col-span-4 self-start  justify-items-center ">
              <div className=" mt-10 w-full text-center ">
                <ButtonCard buttonProps={buttonProps.button1} />
              </div>
              <div className=" mt-10 w-full  text-center ">
                <ButtonCard buttonProps={buttonProps.button2} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:px-20 col-span-12 justify-items-center">
              <CompanyField fieldProps={fieldProps.field1} />
              <CompanyField fieldProps={fieldProps.field2} />
              <CompanyField fieldProps={fieldProps.field3} />
              <CompanyField fieldProps={fieldProps.field4} />
              <CompanyField fieldProps={fieldProps.field5} />
              <div className="hidden md:inline justify-items-center pl-3 w-full ">
                <ButtonCard buttonProps={buttonProps.button3} />
              </div>
            </div>
            <div className="md:hidden">
              <PdfBox isModal={false} />
            </div>
          </div>

          <div className="flex pt-5 text-sm pb-2 w-full text-center items-center justify-center">
            <button>
              {" "}
              <img src={leftArrowIcon} />{" "}
            </button>
            <div className="text-custom-gray-1000  p-2">
              {" "}
              Empresa 1 de 2 pendiente por aprobación{" "}
            </div>
            <button>
              {" "}
              <img src={rightArrowIcon} />{" "}
            </button>
          </div>
        </div>
        <div className="md:hidden flex flex-col pt-5 pb-2 w-full text-center items-center justify-center">
          <div className=" mt-10 w-full text-center ">
            <ButtonCard buttonProps={buttonProps.button1} />
          </div>
          <div className=" mt-10 w-full  text-center ">
            <ButtonCard buttonProps={buttonProps.button2} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Company;
