import { Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote:
            "Zwide has a remarkable talent for problem-solving and a deep understanding of modern web technologies.",
        name: 'Nxumalo',
        title: 'Developper',
        image: '/about.jpg',
    },
    {
        quote:
            "Working with Zwide was a pleasure. He is a dedicated and collaborative team player who is always willing to go the extra mile.",
        name: 'Bukeka',
        title: 'Designer',
        image: '/zwide.jpeg',
    },
];

const Testimonials = () => {
    const [newTestimonial, setNewTestimonial] = useState({ name: "", title: "", quote: "", image: null });

    const handleInputChange = (e) => {
        if (e.target.name === 'image') {
            setNewTestimonial({ ...newTestimonial, image: e.target.files[0] });
        } else {
            const { name, value } = e.target;
            setNewTestimonial({ ...newTestimonial, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend server
        console.log("New testimonial submitted:", newTestimonial);
        alert("Thank you for your testimonial!");
        setNewTestimonial({ name: "", title: "", quote: "", image: null });
    };


    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-800 p-4 md:p-10"
        >
            <header className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">Testimonials</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    What colleagues, clients, and collaborators say about my work.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <p className="text-gray-700 mb-6 text-lg italic relative z-10">"{testimonial.quote}"</p>
                        <div className="flex items-center mt-auto">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-indigo-200 shadow-md"
                            />
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                                <p className="text-gray-600 font-medium">{testimonial.title}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Leave a Testimonial</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={newTestimonial.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title / Company</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={newTestimonial.title}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Your Photo</label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleInputChange}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200 transition-all"
                            accept="image/*"
                        />
                    </div>
                    <div>
                        <label htmlFor="quote" className="block text-sm font-medium text-gray-700">Testimonial</label>
                        <textarea
                            name="quote"
                            id="quote"
                            rows="5"
                            value={newTestimonial.quote}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300"
                        >
                            <Send className="-ml-1 mr-3 h-5 w-5" />
                            Submit Testimonial
                        </button>
                    </div>
                </form>
           </motion.div>
        </motion.div>
    );
};

export default Testimonials;
