import React from 'react'
import { DataContext } from './DataContext'

const Footer = () => {
  const { footer } = React.useContext(DataContext)
  return (
    <div className="text-center">
      <p className="text-theme-text text-xs">{footer.copyright}</p>
      <p className="text-theme-text text-xs">
        Last updated {footer.lastUpdated}.
      </p>
    </div>
  )
}

export default Footer
