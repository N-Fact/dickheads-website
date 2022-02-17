import React, { Component, createContext, useState } from 'react'

const EventContext = createContext()

const EventProvider = (props) => {
  // Context state
  const [isplay, setisplay] = useState(false)
  const { children } = props;
  // Method to update state
 const  setPlayHandler = (param) => {
  setisplay(param)
  }
  return (
    <EventContext.Provider
     value={{
      isplay,
        setPlayChange: setPlayHandler
      }}
    >
       {props.children}
    </EventContext.Provider>
  )
}

export default EventContext;

export { EventProvider }