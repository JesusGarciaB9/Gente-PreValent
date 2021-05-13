import PdfItem from "../pdfItem";

const pdfProps = { 
  pdf1:{
    nombre: "Rut PrevalentWare", 
    bottomMessage:"Rut Pre...",
    url:"/pdfs/Pdf1.pdf",
  },
  pdf2:{
    nombre: "Logo PrevalentWare", 
    bottomMessage:"Logo Pre...",
    url:"/pdfs/Pdf2.pdf",
  },
  pdf3:{
    nombre: "Acta de constitución PrevalentWare", 
    bottomMessage:"Acta de c...",
    url:"/pdfs/Pdf3.pdf",
  },
  pdf4:{
    nombre: "Cámara de Comercio PrevalentWare", 
    bottomMessage:"Cámara d...",
    url:"/pdfs/Pdf4.pdf",
  },
  pdf5:{
    nombre: "Otro Documento PrevalentWare", 
    bottomMessage:"Otro Doc...",
    url:"/pdfs/Pdf5.pdf",
  }
}
const pdfBox = (props) => { //container que muestra los pdfs con su titulo
const {isModal} = props;

  return (
    <div className="flex flex-col ... font-bold text-lg pl-5 pr-5 pb-5 text-lg w-full  ">
    <div className={`  ${isModal ? "text-center text-4xl" : ""}`}>Documentos cargados</div>
    <PdfItem pdfProp={pdfProps.pdf1}/>
    <PdfItem pdfProp={pdfProps.pdf2}/>
    <PdfItem pdfProp={pdfProps.pdf3}/>
    <PdfItem pdfProp={pdfProps.pdf4}/>
    <PdfItem pdfProp={pdfProps.pdf5}/>
  </div>
  );
};
export default pdfBox;
