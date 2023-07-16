import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  const generateImage = () => {
    
  }

  const handleSubmit = () => {};

  const handleChange = (e) => {};

  const handleSurpriseMe = () => {};

  return (
    <section className="mx-auto max-w-7xl ">
      <div>
        <h1 className="text-xl font-extrabold text-gray-800">Create</h1>
        <p className="mt-2 text-gray-600 text-md max-w-500">
          Create imaginative and stunning images with DALL-E AI and share them
          with the community
        </p>
      </div>

      <form className="max-w-3xl mt-16 " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeHolder="John Doe"
            value={form.name}
            handleChangeField={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeHolder="an armchair in the shape of an avocado"
            value={form.prompt}
            handleChangeField={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative flex items-center justify-center w-64 h-64 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="object-contain w-full h-full"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="object-contain w-9/12 h-9/12 opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex items-center justify-center rounded-lg bg-gray-900/50">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-5 mt-5">
          <button 
           type="button"
           onClick={generateImage}
           className="w-full px-5 py-2 text-sm font-medium text-center text-white rounded-md bg-green-600/80 sm:w-auto"
           
           >
            {generatingImg ? 'Generating...' : "Generate Image"}
           </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-sm text-gray-500">
              Once you have created the image you want, you can share it with others in the community
          </p>
          <button
          type="submit"
          className="w-full px-4 py-2 mt-3 text-sm font-medium text-center text-white bg-indigo-400 rounded-md font-md sm:w-auto"
          >

              {loading ? 'Sharing...' : 'Share with the community!'}

          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
