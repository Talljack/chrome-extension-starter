import React, { useState } from 'react'

const Options: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="options-root">
      this is options page
      {count}
    </div>
  )
}

export default Options
