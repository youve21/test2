import { useStorage } from '../../liveblocks.config'
import React from 'react'
import { memo } from 'react'
import { LayerType } from '../../types/canvas'
import { Rectangle } from './Rectangle'
import { Note } from './Note'
import HideLayer from './HideLayer'
import { Square } from './Square'
import { Text } from './Text'
import { Circle } from './Circle'
import { Sharpsquare } from './Sharpsquare'
import { Triangle } from './Triangle'

const LayerPreview = memo(({id, onLayerPointerDown, selectionColor, hide}) => {
  const layer = useStorage((root) => root.layers.get(id))

  if(!layer) return null
  if(hide){
    return <HideLayer layer={layer} selectionColor={selectionColor}/>
  }
  switch(layer.type){
    case LayerType.Note:
      return(
        <Note 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Rectangle:
      return(
        <Rectangle 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Square:
      return(
        <Square 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Circle:
      return(
        <Circle 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Sharpsquare:
      return(
        <Sharpsquare 
          id={id}
          layer={layer} 
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Triangle:
      return(
        <Triangle 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Text:
      return(
        <Text 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    default:
      console.warn("Unknown layer type")
  }
})

export default LayerPreview

