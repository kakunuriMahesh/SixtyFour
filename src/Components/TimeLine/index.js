// import './index.css'
// const TimeLine = ()=>{
//     return(
//         <div className='timeline-container'>
//             Time line
//         </div>
//     )
// }
// export default TimeLine
// import React from 'react';
import './index.css'; // Import CSS file for styling

let track = [
    {
        date:'February 12, 2024',
        heading:'Industrial Production',
        description:'Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.',
    },
    {
        date:'February 12, 2024',
        heading:'CPI Inflation',
        description:`India's Inflation eased to 5.1% in Jan, a 60 basis points decrease from the previous month. Consumer Food Price Index (CFPI) declined from 9.6% in Dec 23 to 8.3% in`,
    },
]

const TimeLine = ({ events }) => {
  return (
    <div className="timeline">
        <div>
            <div className='filter-container'>
                <h6 className='recent-head'>Recent Releases</h6>
                <select id='select'>
                    <option value='ind'>India</option>
                </select>
            </div>
            <hr/>
        </div>
        <div className='overflow'>
            {track.map((event, index) => (
                <div>
                    <div className='dot'></div>
                    <div key={index} className="timeline-event">
                        <div className='track-content'>
                            <div className="event-date">{event.date}</div>
                            <h4 className='track-head'>{event.heading}</h4>
                            <div className="event-description">{event.description}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  );
};

export default TimeLine;
