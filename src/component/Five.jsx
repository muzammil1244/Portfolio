import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import img1 from "../imgs/icons8-add-50 (1).png"

export const Five = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);   
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [showwarn, setwarn] = useState(false);

  const refreshed=async()=>{
    console.log("Fetching blogs..."); 

   await fetch("http://localhost:8000/Users")
      .then((res) => {
        console.log("Raw response:", res); 
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.table("Fetched blogs data:", data); 
        setBlogs(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err); 
      });

  }
  useEffect(() => {

   refreshed()
   
  },[]);
  

  const toggleForm = () => {
    setShowForm(!showForm);
    setImage(null);
    setFile(null);
    setHeading("");
    setParagraph("");
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile)); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !heading || !paragraph) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", heading);
    formData.append("paragraph", paragraph);

    try {
      const res = await fetch("http://localhost:8000/postDATA", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Upload Success:", data);

      await refreshed()


      setImage(null);
      setFile(null);
      setHeading("");
      setParagraph("");
      setShowForm(false);
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };
  console.table(blogs)

  return (
    <section className="w-screen min-h-screen bg-gradient-to-b from-gray-950 to-green-500 p-5 overflow-hidden">
      <div className="w-full flex justify-between md:justify-around items-center mb-12">
        <Element name="Blog">
          
          <h1 className="md:text-5xl text-2xl text-center font-serif bg-gradient-to-b from-green-400 to-gray-700 text-transparent bg-clip-text">
            ADD BLOGS
          </h1>
       
        </Element>

        <div
          onClick={toggleForm}
          className="w-40 h-10 bg-green-600 flex justify-center items-center rounded-md cursor-pointer hover:bg-green-700"
        >
          <img className="w-5 h-5 mr-2" src={img1} alt="" />
          <p className="text-white">{showForm ? "Cancel" : "Add Blogs"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center px-4">
  {blogs.length > 0 ? (
    blogs.map((blog, index) => (
      <div
        key={index}
        className="md:w-80 md:h-100 w-60 h-90 md:py-0  bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      >
        <img
          className="w-full h-48 object-cover"
          src={
            blog.image?.data?.data
              ? `data:${blog.image.contentType};base64,${btoa(
                  blog.image.data.data.reduce((acc, byte) => acc + String.fromCharCode(byte), '')
                )}`
              : null
          }
          alt={blog.name}
        />

        <div className=" py-5 md:p-4 flex flex-col justify-around h-52">
          <h1 className="text-xl font-semibold text-green-400 text-center truncate">{blog.name}</h1>
          <p className="text-sm text-gray-300 text-center leading-tight break-words">{blog.paragraph}</p>
        </div>
      </div>
    ))
  ) : (
    <p className="text-white col-span-full">There is nothing</p>
  )}
</div>

     
      {showForm && (
          <div className="max-w-md mx-auto mt-20 p-6 bg-red-50 border border-red-500 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold text-red-700 mb-4">⚠️ Warning</h2>
          <p className="text-gray-800 mb-6">
          Once you upload an image or enter text, it cannot be deleted unless approved by the developer.
Please ensure that you only submit personal or non-sensitive data.
Note: As we are using the free tier of MongoDB Atlas, data retrieval or reloads may take a few extra seconds.
          </p>
          <button onClick={()=>{ setShowForm(!showForm)  
          setwarn(!showwarn)
           
           
           }} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
            OK
          </button>
          <button 
          onClick={()=>setShowForm(!showForm)}
          className="bg-red-600 text-white ml-4 px-6 py-2 rounded hover:bg-red-700 transition">
Cancel
          </button>
        </div> )}


        {
          showwarn && (
            (
              <div className="flex relative  items-center top-0 justify-center mt-10">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border p-2 rounded-md"
                  />
      
                  <input
                    type="text"
                    placeholder="Enter heading"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    className="border p-2 rounded-md"
                  />
      
                  <textarea
                    placeholder="Enter paragraph (max 150 characters)"
                    value={paragraph}
                    onChange={(e) =>
                      e.target.value.length <= 150 && setParagraph(e.target.value)
                    }
                    className="border p-2 rounded-md resize-none"
                    rows="3"
                  />
      
                  <p className="text-right text-sm text-gray-500">{paragraph.length}/150</p>
      
                  <button
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                  >
                    Submit
                  </button>
                  <button 
                  onClick={()=>setwarn(!showwarn)}
                                      className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                  >Cancel</button>
      
                  {image && (
                    <div className="mt-4 text-center">
                      <img
                        src={image}
                        alt="Preview"
                        className="h-40 w-full object-cover rounded-md mb-2"
                      />
                      <h2 className="text-xl font-bold">{heading}</h2>
                      <p>{paragraph}</p>
                    </div>
                  )}
                </form>
              </div>
            )
          )

        }

    </section>
  );
};