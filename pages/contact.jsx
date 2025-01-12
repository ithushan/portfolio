import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import "toastify-js/src/toastify.css"

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }
        if (!formData.message) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };


    const handleSubmit = async () => {
        if (!validate()) {
            toast.error('Please fix the errors and try again.');
            return;
        }

        // Replace YOUR_WEB_APP_URL with your Google Apps Script URL
        const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxVo2_YcMSqEl51OPb9ilGtL2WTYHhiyaUFjZ4wBlYvlqVhA9XhPeh5uMd_JkYhwAuLHw/exec';

        try {
            const response = await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await response.json();

            if (result.status === 'success') {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                toast.error('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.log("error: ", error);
            toast.error('An error occurred while sending your message.');
        }
    };

    return (
        <BannerLayout>
            <ToastContainer />
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>SriLanka</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Vavuniya</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Current Company:</span>
                                <span className='text-LightGray md:text-sm'>Accron Revolutions Private Limited
                                </span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>ssmithuhan115@gmail.com</span>
                            </div>
                            {/* <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>iosamajavaid</span>
                            </div> */}
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+94 76 447 2115</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/ithushan" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/mithu-shan-bb430b26b/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    {/* <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/iosamajavaid" target='_blank' rel="noreferrer"><FaTwitter /></a> */}
                    {/* <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/codeworthy" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a> */}
                </div>


                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <div>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input_stylings"
                                        placeholder="Name"
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input_stylings"
                                        placeholder="Email"
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea
                                        rows={6}
                                        cols={50}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="input_stylings"
                                        placeholder="Message"
                                    />
                                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                                </div>
                            </div>

                            <div className="my-4">
                                <button onClick={handleSubmit} className="button"> SEND MESSAGE </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* success modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                // wrapClassName='bg-red-800'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>In Progress</h1>
                    <a className='underline text-Snow' target='_blank' href=''>Be the one to integrate this!</a>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>

    )
}

export default Contact