import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
import { motion } from 'framer-motion'; // Import framer-motion

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Cleaning the form data
    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (username === '' || user_email === '' || user_message === '') {
      setLoading(false);
      toast.error("Please fill all the fields.", {
        position: 'bottom-right',
      });
      return;
    }

    console.log(username, user_email, user_message);

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        {
          from_name: username,
          to_name: "Bharathsree",
          reply_to: user_email,
          to_email: "sbharathsree1@gmail.com",
          message: user_message,
        },
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", {
            position: 'bottom-right',
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Error sending email:", error.text);
          toast.error(`Uh, oh! Something went wrong: ${error.text}`, {
            position: 'bottom-right',
          });
        }
      );
  };

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className='relative z-0 bg-black w-screen h-screen mt-12'
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className='text-white contact overflow-x-hidden pt-12 mt-8 ' id='contact'>
        <motion.div 
          className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className='font-light'>REACH OUT TO ME</p>
          <motion.h2 
            className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'
            variants={fadeInLeft}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Contact.
          </motion.h2>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
            initial="hidden"
            animate="visible"
          >
            <motion.label className='flex flex-col' variants={fadeInUp} transition={{ delay: 0.4 }}>
              <span className=' font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                required
              />
            </motion.label>

            <motion.label className='flex flex-col' variants={fadeInUp} transition={{ delay: 0.5 }}>
              <span className=' font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Ex:abc@gmail.com"
                className='py-4 px-6 rounded-lg  font-medium bg-gray-900'
                required
              />
            </motion.label>

            <motion.label className='flex flex-col' variants={fadeInUp} transition={{ delay: 0.6 }}>
              <span className='font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Do you have anything to say?'
                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                required
              />
            </motion.label>

            <motion.button
  type='submit'
  className='pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900 hover:bg-gray-700 duration-300'
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  variants={fadeInUp}
>
  {loading ? "Sending..." : "Send"}
</motion.button>

          </motion.form>
        </motion.div>
        <ToastContainer />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
