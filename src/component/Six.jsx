import { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

export const Six = () => {
  const [showName, setName] = useState("");
  const [showEmail, setEmail] = useState("");
  const [showMsg, setMsg] = useState("");

  const Submited = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    console.log(showEmail, showMsg, showName);  // Display form data
    
    // Add your emailjs logic here
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,        {
          name: showName,
          message: showMsg,
          to_email: showEmail,
        },
       
        import.meta.env. VITE_APP_EMAILJS_PUBLIC_KEY,
 )
      .then(() => {
        alert("Message sent successfully!");
        setName('');
        setEmail('');
        setMsg('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <section className="w-full min-h-screen bg-gray-950 flex flex-col items-center justify-center p-8">
      <Element name="Contect">
        <h2 className="texts text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h2>
      </Element>

      <p className="logo text-white text-lg md:text-xl mb-8 text-center max-w-xl">
        Feel free to reach out for collaborations or just a friendly hello!  
        I am always open to discussing new projects or creative ideas.
      </p>

      <form
        className="bg-transparent rounded-2xl shadow-2xl p-8 w-full flex flex-col gap-5"
        onSubmit={Submited} // Calling Submited directly
      >
        <div className="texts w-full flex justify-around">
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            className="p-3 w-2/4 placeholder-blue-50 text-blue-50 rounded-md border-2 border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue="muzammil844641@gmai.com" // Ensure this is what you want
            className="p-3 w-2/4 text-blue-50 placeholder-blue-50 rounded-md border-2 border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <textarea
          placeholder="Your Message"
          onChange={(e) => setMsg(e.target.value)}
          rows="5"
          className="texts p-3 rounded-md border-2 text-blue-50 placeholder-blue-50 border-white resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        ></textarea>

        <button
          type="submit"
          className="texts bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>

      <p className="texts text-white text-sm mt-8">
        © {new Date().getFullYear()} Mr Muzammil. All rights reserved.
      </p>
    </section>
  );
};
