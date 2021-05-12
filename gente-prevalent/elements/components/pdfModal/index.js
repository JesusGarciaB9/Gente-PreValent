import PdfBox from "../pdfBox";
export default function pdfModal(props) {
  const { showModal, setShowModal } = props;
  console.log("showModal ", showModal);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between   rounded-t">
                  <button
                    className=" ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="  text-black   h-6 w-6 text-2xl block  ">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative pl-8 pr-8 flex-auto">
                  <p className="  text-blueGray-500 text-lg leading-relaxed">
                    <PdfBox isModal={true} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
