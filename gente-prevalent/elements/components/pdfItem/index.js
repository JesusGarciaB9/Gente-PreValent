import pdfImage from "../../resources/images/pdfIcon.svg";
const pdfItem = (props) => { //cada uno de los items del listado de pdfs
  const {  nombre , 
  bottomMessage ,
  url} = props.pdfProp;
  function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
 
    <button onClick={()=>download(url)} className="grid grid-cols-5 px-4 mt-5 ripple-bg-white w-full font-normal items-center text-left content-center focus:outline-none ">
      <div className="grid col-span-3 text-lg content-center">
        {nombre }
      </div>
      <div className="grid col-span-1  ">
 
      </div>
      <div className="grid col-span-1 text-xs">
        <img src={pdfImage} />
        <div>{ bottomMessage}</div>
      </div>
    </button>
    
  );
};
export default pdfItem;
