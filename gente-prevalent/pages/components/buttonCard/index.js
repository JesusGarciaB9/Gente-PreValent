const buttonCard = (props) => {
  const { message, image,modalState,setModalState } = props.buttonProps;
  
  const handlerModal = (e) => {
   e.preventDefault();
   setModalState(!modalState);
  }
  return (
    <button onClick={(e)=> handlerModal(e)} className="flex bg-white shadow-xl rounded-2xl    px-4 text-lg inline-flex items-center font-bold w-9/12 ">
      <img className="mr-2 " src={image} />
      <span className=" py-3 ">{message}</span>
    </button>
  );
};
export default buttonCard;
