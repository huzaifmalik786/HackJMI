import React from 'react';

function Events() {
  const events= [
    {
      name: "Introductory Session",
      date: "22 January",
      time: "2:00 PM",
      details: "All Details About Session"
    },
    {
      name: "Introductory Session",
      date: "22 January",
      time: "2:00 PM",
      details: "All Details About Session"
    }
  ]
  return (
    <section className='relative' id="Events">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <div className="dark:bg-black transition-all flex flex-col items-center mb-10" data-aos="fade-up">
          {/* Section  */}
					<div className="max-w-3xl mx-auto text-center w-full">
            <h1 className="dark:text-white h2 mb-6">Events</h1>
            {events.map((event)=>(
              <div className='flex bg-gray-200 dark:bg-gray-900 rounded-l-lg rounded-lg hover:scale-95 transition-all mb-4'>
                <div className='md:p-4 md:px-6 p-2 px-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-l-lg rounded-lg m-2'>
                  <div className='text-center text-white text-base scale-90'>
                    <p className='mb-2'>{event.date}</p>
                    <p className=''><strong>{event.time}</strong></p>
                  </div>
                </div>
                <div className='flex flex-col items-start md:m-4 mt-3'>
                  <h1 className='dark:text-white h4 md:text-base text-sm md:mb-1'>{event.name}</h1>
                  <p className='text-gray-600 text-sm'>{event.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
				<div className="border" />
      </div>
    </section>
  )
}

export default Events