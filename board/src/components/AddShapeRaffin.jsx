import React from 'react'
import { useStorage } from '../../liveblocks.config'
import { Button } from './ui/button'
import plus_combin from '../assets/plus_combin.svg'




const AddShapeRaffin = ({camera,id, insertRaffin}) => {

    const layer = useStorage((root) => root.layers.get(id))


    const x = layer.x +  camera.x
    const y = layer.y + camera.y
    const width = layer.width
    const height= layer.height
    //layer.get(id).set("fill",  {r:10,g:10,b:10})

    return (
        layer.type == 17 ? (
          <div
            className="absolute p-3 rounded-xl shadow-sm border flex select-none"
            style={{
              transform: `translate(
                calc(${x + width/2}px - 50%),
                calc(${y + height +50}px - 50%)
              )`,
              backgroundColor: 'transparent', // Ensuring no background color
              border: 'none', // Remove border if not required
              zIndex: 0 // Setting a negative z-index to send it to the back
            }}
          >
          <img src={plus_combin} alt="plus" onClick={insertRaffin} className='plus'/>
          </div>
        ) : <></>
      )
      
      
}

export default AddShapeRaffin