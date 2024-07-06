import React from 'react'
import Link from 'next/link'

export const SpecialCTA = ({ text, className = '' }) => {
  return (
    <span className={`cursor-pointer ${className} pt-2 pb-1 animated-cta-link`}>
      <p className="section-cta-small xl:section-cta animated-cta-link-group--text">
        {text}&nbsp;
      </p>
      <svg
        width={22}
        height={22}
        className="fill-theme-highlight-contrast rotate-180 inline mb-2 animated-cta-link-group--icon"
        viewBox="0 0 512 512"
      >
        <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z" />
      </svg>
    </span>
  )
}

const CTA = ({ text, href, className = '' }) => {
  return (
    <Link
      className={`cursor-pointer ${className} pt-2 pb-1 animated-cta-link`}
      href={href}
    >
      <p className="section-cta-small xl:section-cta animated-cta-link-group--text">
        {text}&nbsp;
      </p>
      <svg
        width={22}
        height={22}
        className="fill-theme-highlight-contrast rotate-90 inline mb-2 animated-cta-link-group--icon"
        viewBox="0 0 512 512"
      >
        <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z" />
      </svg>
    </Link>
  )
}

export default CTA
