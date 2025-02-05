import React from 'react'

const ColorOption = ({colors, handlePlay}) => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-1'>
      {colors.map((color, index) => (
        <button
        key={index}
        data-testid="colorOption"
        className="w-16 h-16 rounded-full border-2 border-white hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: color }}
        onClick={() => handlePlay(color)}
        >

        </button>
          
      ))}
    </div>
  )
}

export default ColorOption
