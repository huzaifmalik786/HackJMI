import React from 'react'
import Mentor from "../assets/icons/mentor.png";

function Mentors() {
  return (
    <section className='relative' id="Mentors">
		<div className="relative max-w-6xl mx-auto px-4 sm:px-6 my-8">
            <div className="dark:bg-black transition-all flex flex-col items-center mb-10" data-aos="fade-up">
                {/* Section  */}
				<div className="max-w-3xl mx-auto text-center w-full">
                    <h1 className="dark:text-white h2 mb-6">Call For Mentors</h1>
					<div className="flex items-center justify-center flex-col mb-5 mt-5">
                        <img src={Mentor} className="w-40 mb-5"/>
                        <p className='text-gray-600'>
                            Calling all tech experts! We are seeking <strong className='text-orange-600'>Mentors</strong> for <strong>Hack JMI</strong>.
                        </p>
                        <a href="https://forms.gle/4A9tr9dLmZZkhAvx6" target="_blank">
                            <button className="btn btn-primary mt-4 bg-orange-600 hover:scale-95
								hover:shadow-xl hover:shadow-orange-600/10 hover:bg-orange-700
								transition-all my-5
								text-white">
                                    Click Here to fill the form
                            </button>
                        </a>
                    </div>

                </div>

            </div>
            <div className="border" />
        </div>

    </section>
  )
}

export default Mentors