import pdfImage from "../../resources/images/pdfIcon.svg";
const pdfItem = (props) => {
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
 
    <button onClick={()=>download(url)} className="grid grid-cols-5 px-4 pt-5  w-full font-normal items-center text-left content-center ">
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
