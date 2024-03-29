import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Resume1 from "../../assets/resume1.png";
import Resume2 from "../../assets/resume2.png";
import Resume3 from "../../assets/resume3.png";
import Resume4 from "../../assets/resume4.png";
import Resume5 from "../../assets/resume5.png";

const templates = [
  {
    name: "Royal Template",
    image: Resume1,
    redirect: "/template1",
  },
  {
    name: "Hero Template",
    image: Resume2,
    redirect: "/template2",
  },
  {
    name: "Ghost Template",
    image: Resume3,
    redirect: "/template3",
  },
  {
    name: "Ocean Template",
    image: Resume4,
    redirect: "/template4",
  },
  {
    name: "Dodge Template",
    image: Resume5,
    redirect: "/template5",
  },
];
const ShowTemplateModal = ({ setShowTemplate, resume }) => {
  const navigate = useNavigate();
  const handleRedirect = (redirect) => {
    setShowTemplate(false);
    navigate(redirect, { state: resume });
  }
  return (
    <div className="w-full text-white bg-[#15202b] flex flex-col rounded-md">
      <div className="flex items-center justify-end border-b border-gray-700 p-2">
        <div
          className="w-9 h-9 flex items-center justify-center xl:px-0 bg-slate-800"
          onClick={() => setShowTemplate(false)}
        >
          <AiOutlineClose size={24} />
        </div>
      </div>
      <div className="container xl:max-w-7xl mx-auto px-4 pt-10 lg:px-8 text-3xl font-medium">
        Select Template👇
      </div>
      <div>
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {templates.map((template, index) => (
              <TemplateCard key={index} template={template} handleRedirect={handleRedirect} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateCard = ({ template, handleRedirect }) => (
  <div className="w-full max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700">
    <img className="p-8 rounded-t-lg" src={template.image} alt="Template" />
    <div className="px-5 pb-5">
      <h5 className="text-xl font-semibold tracking-tight text-white">
        {template.name}
      </h5>

      <div className="flex items-center mt-2.5 mb-5">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
          5.0
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold text-white">$0</span>
        <button
          type="button"
          className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          onClick={() => handleRedirect(template.redirect)}
        >
          Select
        </button>
      </div>
    </div>
  </div>
);

export default ShowTemplateModal;
