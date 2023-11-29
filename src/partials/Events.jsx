import { useQuery } from '@tanstack/react-query';
import dayjs from '../utils/day';
import { gql } from 'graphql-request';
import React from 'react';
import { hygraph } from '../utils/hygraph';
import { BiCalendar, BiLocationPlus } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import EventsCard from '../components/Events/Card';

function Events() {

  const {data,loading,error} = useQuery({
    queryKey: ["events-data"],
    queryFn: async () => await hygraph.request(
      gql`
      {
        events {
          content
          createdAt
          id
          name
          publishedAt
          time
          updatedAt
          url
          venue
          streamyardLink
          post {
            id
            url
          }      
        }
      }      `
    )
  });

  return (
    <section className='relative' id="Events">
      {loading && "Loading... Please Wait"}
      {error && "Error Occured"}
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <div className="dark:bg-black transition-all flex flex-col items-center mb-10" data-aos="fade-up">
          {/* Section  */}
					<div className="max-w-3xl mx-auto text-center w-full">
            <h1 className="dark:text-white h2 mb-6">Events</h1>
            {data?.events.map((event, key)=>(
              <EventsCard 
                event={event}
                key={key}
              />
            ))}
          </div>
        </div>
				<div className="border" />
      </div>
    </section>
  )
}

export default Events