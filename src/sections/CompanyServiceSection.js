import React from 'react'

const CompanyServiceSection = ({companyicon, servicetitle, serviceinfo}) => {
  return (
    <div className="service-info">
      <button className="icon-button"> <img src={companyicon} alt={servicetitle}/></button>
      <h1>{servicetitle}</h1>
      <p>{serviceinfo}</p>
    </div>
  )
}

export default CompanyServiceSection