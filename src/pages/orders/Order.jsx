/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { listAllItemApi, statusUpdateApi } from "../../services/AllApi";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Order = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchListAllItemApi();
  }, []);

  const fetchListAllItemApi = async () => {
    const data = await listAllItemApi();
    if (data.success) setData(data?.data ? data?.data : []);
    else {
      toast.error("Error, Please refresh it", {
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

  const statusHandler = async (event, orderId) => {
    const data = await statusUpdateApi(event, orderId);
    console.log(data?.success);
    if (data?.success) {
      fetchListAllItemApi();
    }
  };

  return (
    <>
      <div className="mt-5">
        <p className="text-black font-semibold text-lg">My Orders</p>
        <div className="mt-7">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Logo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mobile No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Items
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Track Order
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          src={assets.parcel_icon}
                          alt="icon"
                          className="w-[4rem] rounded-md"
                        />
                      </th>
                      <td className="px-6 py-4">
                        {item?.items?.map((value, index) => {
                          if (index === item?.items.length - 1) {
                            return value.name + " X " + value.quantity;
                          } else {
                            return value.name + " X " + value.quantity + ", ";
                          }
                        })}
                      </td>
                      <td className="px-6 py-4">
                        {item?.address?.firstName +
                          " " +
                          item?.address?.lastName}
                      </td>
                      <td className="px-6 py-4">
                        {item?.address?.street +
                          ", " +
                          item?.address?.city +
                          ", " +
                          item?.address?.state +
                          ", " +
                          item?.address?.country +
                          ", " +
                          item?.address?.zipcode}
                      </td>
                      <td className="px-6 py-4">{item?.address?.phone}</td>
                      <td className="px-6 py-4">
                        ${parseFloat(item.amount).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">{item.items.length}</td>
                      <td className="px-6 py-4">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) =>
                            statusHandler(e.target.value, item._id)
                          }
                          value={item.status}
                        >
                          <option value="Food Processing">
                            Food Processing
                          </option>
                          <option value="Out for delivery">
                            Out for delivery
                          </option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                      {/* <td className="px-6 py-4 font-semibold cursor-pointer">
                        <button className="underline text-blue-600 font-semibold cursor-pointer">
                          Click
                        </button>
                      </td> */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-4 text-center">
                      No item
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
