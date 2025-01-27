import React from 'react'
import Icon from './Icon'

import clock from '/Users/hargobindsingh/Local Documents/Coding/Websites/Hvac/src/assets/clock.png'

const Header = () => {
  return (
    <div>
      <div>
      <header className="bg-gray-100 text-white">
        {/* Top Section (Logo and Contact Info) */}
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Icon/> {/* Custom height */}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Clock Icon with Continuous Blinking Effect */}
            <img
              className="w-12 h-12 md:w-16 md:h-16 mb-10 animate-blink" // Apply the blinking class
              src={clock}
              alt="Clock Icon"
            />
            <div className="text-right text-black">
              <div className="text-lg md:text-xl font-bold">
                24 Hour Repair, Installation & Maintenance Service
              </div>
              <ul className="list-none">
                <li className="text-lg md:text-xl font-bold">
                  Tel: 647-210-6862
                </li>
                <li className="text-lg md:text-xl font-bold">
                  Tel: 647-607-2138
                </li>
                <li className="text-lg md:text-xl font-bold">
                  Tel: 905-792-3555
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>


    </div>
  )
}

export default Header
