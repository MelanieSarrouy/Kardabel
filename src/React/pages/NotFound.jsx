import React, { useEffect } from 'react'
import notFound from '../../assets/illustrations/404 Page Not Found _Flatline.svg'


const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <img src={notFound} alt="404 *page not found" />
    </div>
  )
}

export default NotFound
