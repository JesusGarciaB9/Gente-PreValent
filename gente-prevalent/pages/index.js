import Image1 from "../elements/resources/images/card1image.svg";
import Image2 from "../elements/resources/images/card2image.svg";
import Image3 from "../elements/resources/images/card3image.svg";
import Image4 from "../elements/resources/images/card4image.svg";
import styles from "../styles/Home.module.css";
import Card from "../elements/components/card";

const cardProps = {
  card1:{
    nombre: "Solicitudes de creación de empresas",
    img:Image1,
    bottomMessage:"2 solicitudes sin tratar",
    link:"/views/viewCompany",
  },
  card2:{
    nombre: "Indicadores",
    img:Image2,
    bottomMessage:"Visitado por última vez 31/01/2020",
    link:"/",
  },
  card3:{
    nombre: "Inscripción de empleados en empresas",
    img:Image3,
    bottomMessage:"3 usuarios sin empresa registrada",
    link:"/",
  },
  card4:{
    nombre: "Gestión de usuarios",
    img:Image4,
    bottomMessage:"532 usuarios activos en la plataforma",
    link:"/",
  }

}


export default function Home() {
  return (
    <div className={styles.container2}>
       
      <div className=" md:place-items-center gap-6 
      w-full grid grid-cols-1  text-2xl   md:-mt-10 md:gap-10
      md:grid-cols-2  md:text-3xl  md:w-3/5 md:content-center"  >
        <Card cardProps={cardProps.card1}/>
        <Card cardProps={cardProps.card2}/> 
        <Card cardProps={cardProps.card3}/> 
        <Card cardProps={cardProps.card4}/> 
      </div>
    </div>
  );
}
