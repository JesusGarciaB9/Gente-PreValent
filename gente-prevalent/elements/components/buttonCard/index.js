 
const buttonCard = (props) => { //bottones de vista en view company 
  const { message, image, modalState, setModalState } =
    props.buttonProps; 

  const handlerModal = (e) => {
    e.preventDefault(); 
      setModalState(!modalState); //cambio de estado del respectivo modal de cada botón(en este caso el modal de adjuntos)
 
  };
  return (
    <button
      onClick={(e) => handlerModal(e)}
      className="flex ripple-bg-white shadow-xl rounded-2xl focus:outline-none  px-4 text-lg inline-flex items-center 
      font-bold w-9/12 "
    >
      <img className="mr-2 " src={image} />
      <span className=" py-3 ">{message}</span>
    </button>
  );
};
export default buttonCard;
