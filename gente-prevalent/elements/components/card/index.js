import reloj from "../../resources/images/reloj.svg";
import { useRouter } from 'next/router';

 

const Card = (props) => { //cards en home view
  const { nombre, img, bottomMessage, link } = props.cardProps;
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault() 
    router.push(link)
  }


  return (
    <button  onClick={handleClick} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... w-full 
    focus:outline-none text-left shadow-lg rounded-lg min-h-custom md:min-h-3/4 
    h-auto ripple-bg-white md:min-w-customCard mb-6 md:mb-1 animate-fade-in-down">
      <div className="grid grid-cols-3 md:grid-cols-1">
        <div className="flex mb-2 pl-3 -mt-8 md:-mt-10 md:pl-4 p-3 md:w-full ">
          <img
            className="w-16 h-16 md:w-16 md:h-20 p-3 rounded bg-custom-blue-100 "
            src={img}
          />
        </div>
        <div className="flex min-h-custom4 md:min-h-custom3 p-3 pt-2 md:w-full col-span-2 text-custom-gray-400   ">
          {nombre}
        </div>
      </div>

      <div className="grid grid-cols-12 content-center  border-t-2   p-3    border-custom-gray-100 text-custom-gray-200 text-xs md:h-10">
        <div className="col-span-1 md:col-span-1 self-center">
          <img className="w-5 h-5 rounded  " src={reloj} /> 
        </div>
        <div className="col-span-11 md:col-span-4 p-1 ">{bottomMessage}</div>
      </div>
    </button>
  );
};
export default Card;
