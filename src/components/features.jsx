import React from 'react'
import { PiLeafBold } from "react-icons/pi";
import { GrCluster } from "react-icons/gr";
import { BsBuildingGear } from "react-icons/bs";



const featuresList = [
    {
        title: "Lightweight",
        icon: <PiLeafBold />
    },
    {
        title: "Scalable Architecture",
        icon: <GrCluster />
    },
    {
        title: "Enterprise-Grade",
        icon: <BsBuildingGear />
    }
]

export function Feature({ text, icon }) {
    return (
      <div className="feature">
        {icon}
        <h4>{text}</h4>
      </div>
    );
}

export default function Features() {
  return (
    <div className='features'>
        {featuresList.map((feature, index) => (
            <Feature text={feature.title} icon={feature.icon} key={index} />
        ))}
    </div>
  )
}
