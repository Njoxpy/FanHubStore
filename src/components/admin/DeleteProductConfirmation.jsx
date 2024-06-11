import React from "react";

export default function DeleteProductConfirmation() {
  return (
    <main>
      <div className="p-8 bg-gray">
        <h1>Delete Product Page</h1>
        <div>
        <p className="font-ligh">Do You Really Want To Delete This</p>
        <button
            type="submit"
            className="p-2 bg-red-600 text-white rounded font-bold m-3 hover:text-white"
          >
            Delete Product
          </button>
        </div>
        <div>
        <button
            type="submit"
            className="p-2 bg-red-600 text-white rounded font-bold m-3 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}
