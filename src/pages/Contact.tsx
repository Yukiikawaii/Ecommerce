import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact(){
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return(
        <div className="bg-white">

            <div className="bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-5xl mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Get in <span className="text-purple-500">Touch</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Questions, feedback, or just want to say hi? We'd love to hear from you.
                    </p>
                </div>
            </div>

          
            <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

               
                <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-purple-100 text-purple-500 p-3 rounded-full">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Email</h3>
                            <p className="text-sm text-gray-500">yukiik168@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-purple-100 text-purple-500 p-3 rounded-full">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Phone</h3>
                            <p className="text-sm text-gray-500">09534926037</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-purple-100 text-purple-500 p-3 rounded-full">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Address</h3>
                            <p className="text-sm text-gray-500">brgy. Desawo Tboli south cot.</p>
                        </div>
                    </div>
                </div>

             
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-purple-50 p-6 rounded-lg">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                        <Send size={16} />
                        Send Message
                    </button>

                    {submitted && (
                        <p className="text-sm text-green-600 text-center">
                            Thanks! We'll get back to you soon.
                        </p>
                    )}
                </form>

            </div>
        </div>
    )
}