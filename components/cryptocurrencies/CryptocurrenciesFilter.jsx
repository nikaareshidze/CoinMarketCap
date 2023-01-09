import React from "react";

export default function CryptocurrenciesFilter(props) {
  function changeRowsNumber() {
    props.setShowRowsNumber(99);
  }

  function changeToInitialRowsNumber() {
    props.setShowRowsNumber(19);
  }

  return (
    <div>
      {props.showRowsNumber == 99 ? (
        <button
          className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={changeToInitialRowsNumber}
        >
          Initial Rows
        </button>
      ) : (
        <button
          className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={changeRowsNumber}
        >
          Show All rows
        </button>
      )}
    </div>
  );
}
