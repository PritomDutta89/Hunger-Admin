/* eslint-disable no-unused-vars */
import React from "react";

const List = () => {
  return (
    <>
      <div className="px-10">
        <div>
          <p className="text-lg font-semibold text-gray-700 mt-8">
            All Food List
          </p>
        </div>
        <div className="relative overflow-x-auto w-full h-auto mt-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col" className="px-6 py-3">
                  100
                </th>
                <th scope="col" className="px-6 py-3">
                  100
                </th>
                <th scope="col" className="px-6 py-3">
                  100
                </th>
                <th scope="col" className="px-6 py-3">
                  100
                </th>
                <th scope="col" className="px-6 py-3">
                  100
                </th>
              </tr>
              {/* {Object.entries(cartItems).length !== 0 ? (
              allFoods.map(
                (item, index) =>
                  cartItems[item._id] > 0 && (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          src={item.image}
                          alt="icon"
                          className="w-[4rem] rounded-md"
                        />
                      </th>
                      <td className="px-6 py-4">{1}</td>
                      <td className="px-6 py-4">${1}</td>
                      <td className="px-6 py-4">{10}</td>
                      <td className="px-6 py-4">
                        ${10}
                      </td>
                      <td
                        className="px-6 py-4 font-semibold cursor-pointer"
                       
                      >
                        x
                      </td>
                    </tr>
                  )
              )
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center">
                  Empty cart
                </td>
              </tr>
            )} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
