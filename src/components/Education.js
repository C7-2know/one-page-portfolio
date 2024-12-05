import React from 'react'

const Education = ({institute, startDate, endDate, department,detail}) => {
  return (
    <div>
        <h1>{institute} from {startDate} {" "} to {endDate}</h1>
        <sm>{department}</sm>
        <div>
            <p>{detail}</p>
        </div>
    </div>
  )
}

export default Education