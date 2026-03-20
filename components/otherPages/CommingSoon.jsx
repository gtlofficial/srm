"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
 
  
       
 
        
      </>
    );
  }
};

export default function CommingSoon() {
  const [showCountdown, setShowCountdown] = useState(false);
  useEffect(() => {
    setShowCountdown(true);
  }, []);

  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
   
    </div>
  );
}
