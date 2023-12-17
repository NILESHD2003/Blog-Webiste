import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center fixed bottom-0 bg-white border shadow-inner">
      <div className="w-11/12 max-w-[650px] text-center">
        <div className="mt-3 flex justify-between">
          <div className="flex gap-4">
            {page > 1 && (
              <button
                className="rounded-md border border-black py-1 px-2"
                onClick={() => handlePageChange(page - 1)}
              >
                Previous
              </button>
            )}
            {page < totalPages && (
              <button
                className="rounded-md border border-black py-1 px-2"
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </button>
            )}
          </div>
          <p className="font-bold text-sm">
            Page {page} of {totalPages}
          </p>
        </div>
        <p>Copyright &copy;2023 <span className="text-blue-500"><a href="https://nileshdeshpande.onrender.com/" target="_blank">Nilesh Deshpande</a></span>.</p>
      </div>
    </div>
  );
}

export default Pagination;
