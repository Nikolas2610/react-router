import { useLoaderData } from 'react-router-dom'

export default function CareerDetails() {
    const career = useLoaderData();

    return (
        <div className='career-details'>
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque neque architecto corrupti eaque hic officiis reiciendis. Exercitationem eveniet, nam aspernatur enim doloremque quis ipsam nesciunt dolore autem, ab perspiciatis.</p>
            </div>
        </div>
    )
}

// Loader function 
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/' + id);

   if (!res.ok) {
     throw Error('Could not find that career');
   }
    return res.json();
}
