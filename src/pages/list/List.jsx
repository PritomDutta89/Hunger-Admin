/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { listItemApi, removeItemApi } from "../../services/AllApi.js";
import { assets } from "../../assets/assets.js";
import { toast } from "react-toastify";
import { BASE_URL } from "../../services/helper.js";

const List = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchListItemApi();
  }, []);

  const fetchListItemApi = async () => {
    const data = await listItemApi();
    if (data?.data?.success) {
      setAllData(data?.data?.data);
    } else setAllData([]);
  };

  const removeItem = async (id) => {
    const data = await removeItemApi(id);
    if (data?.data?.success) {
      fetchListItemApi();
      toast.success("Food Removed Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else
    {
      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
              {allData.length > 0 ? (
                allData.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={`${BASE_URL}/images/${item.image}`}
                        alt="icon"
                        className="w-[3rem] rounded"
                      />
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={() => removeItem(item._id)}
                    >
                      <img
                        src={assets.cross_icon1}
                        alt="icon"
                        className="w-[0.7rem] rounded-md"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center">
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
