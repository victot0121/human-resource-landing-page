import React from 'react'

const Services = () => {
    return (
        <section id="services" className="bg-slate-100 py-16 px-8">
            <h2 className="text-3xl font-semibold text-center animate-fadeInUp opacity-0 delay-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-6 shadow-lg rounded-md">
                    <h3 className="text-xl font-bold mb-3">Recruitment</h3>
                    <p>We help you find the right talent to fit your organization's needs.</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-md">
                    <h3 className="text-xl font-bold mb-3">Employee Management</h3>
                    <p>Streamline your HR processes for greater efficiency.</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-md">
                    <h3 className="text-xl font-bold mb-3">Training & Development</h3>
                    <p>Empower your workforce with the latest skills and knowledge.</p>
                </div>
            </div>
        </section>
    )
}

export default Services