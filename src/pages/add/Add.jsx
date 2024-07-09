/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { addItemApi } from "../../services/AllApi";
import { toast,ToastContainer } from "react-toastify";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    console.log("check2: ", event.target.name);
    setData((prv) => ({ ...prv, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    // call add api
    const res = await addItemApi(formData);
    if (res?.data?.success) {
      toast.success("Items Added Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
    }
    else
    {
      toast.warn("Please fill in all the mandatory fields.", {
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
      <div className="w-[11rem] md:w-[17rem]">
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-4 items-start justify-center mt-4 ml-6 w-full">
            <div className="flex flex-col items-start justify-center w-full">
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Upload Image <span className="text-red-600">*</span>
              </p>
              <div className="">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-fit p-[1rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  {/* {image ? (
                image.name
              ) : ( */}
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                    {image && <p className="mt-2">{image.name}</p>}
                  </div>
                  {/* )} */}
                  <input
                    id="dropzone-file"
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    hidden
                    required
                  />
                </label>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                name="name"
                value={data.name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Name"
                onChange={onChangeHandler}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Description <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                name="description"
                value={data.description}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write content here..."
                onChange={onChangeHandler}
                required
              ></textarea>
            </div>

            <div className="w-full">
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Category <span className="text-red-600">*</span>
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  name="category"
                  value={data.category}
                  onChange={onChangeHandler}
                  required
                >
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Deserts">Deserts</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="Product Price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
                >
                  Product Price <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="Product Price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="price"
                  placeholder="$40"
                  value={data.price}
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm md:text-base px-5 md:px-8 py-2.5 mb-6 "
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
