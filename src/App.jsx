import React from "react";
import { Download, MoveRight, Phone } from "lucide-react";

const App = () => {
  const openModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal.showModal();
  };
  return (
    <div className="main w-full bg-zinc-50">
      <div className="w-full h-[250px] overflow-hidden relative">
        <img
          src="/hero.jpg"
          className="w-full h-full bg-center bg-cover bg-no-repeat"
          alt=""
        />
        <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-zinc-50 to-slate-100/0"></div>
      </div>
      <div className="w-full mt-10 flex flex-col items-center justify-center gap-5 px-6">
        <h1 className="text-center text-xl font-semibold leading-none tracking-wide">
          Donation Details.
        </h1>
        <img src="qr.jpg" alt="" />
        <a
          href="qr.jpg"
          download="donation-qr.jpg"
          className="btn btn-soft bg-base-300 text-lg text-base-content px-10 py-6 flex items-center justify-between font-semibold"
        >
          Download QR <Download />
        </a>
      </div>
      <div className="w-full mt-10 flex flex-col items-center justify-center gap-5 px-6">
        <h1 className="text-xl font-bold">Account Details.</h1>
        <p className="tracking-wider">
          <span className="font-medium text-gray-600">
            Account Holder Name:
          </span>{" "}
          Banti Dey.
        </p>
        <p className="tracking-wider">
          <span className="font-medium text-gray-600">Account Number:</span>{" "}
          33382625615
        </p>
        <p className="tracking-wider">
          <span className="font-medium text-gray-600">IFSC Code:</span>{" "}
          SBIN0000106
        </p>
      </div>
      <div className="w-full mt-10 flex flex-col px-6 items-center justify-center gap-5">
        <h1 className="text-xl text-zinc-900 font-bold">Contact Details.</h1>
        <p className="font-medium flex items-center justify-center gap-2">
          <Phone size={16}/>
          Banti Dey - 8250461525
        </p>
        <p className="font-medium flex items-center justify-center gap-2">
          <Phone size={16}/>
          Kobita Singha - 6296202978
        </p>
      </div>
      <div className="w-full mt-10 flex flex-col items-center justify-center gap-5 px-6">
        <h1 className="text-center text-gray-900 text-2xl font-semibold leading-none tracking-wide">
          Support My Husband's Battle - Raise Funds for Colon Cancer Treatment
        </h1>
        <p className="text-gray-600">
          <span className="font-bold">My name is Banti Dey (Singha)</span> , and
          I am raising funds for my husband, Prosenjit Singha, who has been
          battling Colon Cancer for the past three months. He is currently
          undergoing treatment at AIG Hospitals, Hyderabad, and requires urgent
          medical care to continue his fight against this life-threatening
          disease.
        </p>
      </div>

      <div className="px-6 mt-10">
        <div className="w-full p-4 bg-zinc-200 rounded-xl">
          <div className="w-full h-[100px] overflow-hidden ">
            <img src="medicalproof.jpg" alt="" className="rounded-md" />
          </div>
          <span
            onClick={openModal}
            className="inline-flex items-center px-6 py-2 rounded-full text-sm mt-4 bg-zinc-800 font-bold text-zinc-300"
          >
            See full document. <MoveRight />
          </span>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Colonoscopy Report</h3>
          <img src="medicalproof.jpg" alt="" />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default App;
