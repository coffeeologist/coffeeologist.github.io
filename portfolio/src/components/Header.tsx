import React from 'react'
import Link from 'next/link'
import { DataContext } from './DataContext'

export const linkedinSVG = (size = 55) => {
  return (
    <svg
      width={size}
      height={size}
      className="fill-theme-text"
      viewBox="0 0 600 600"
    >
      <title>Linkedin</title>
      <g class="animated-icon-group" fill="none" fill-rule="evenodd">
        <circle
          class="animated-icon-group--outline"
          stroke-width="40"
          stroke-dasharray="1333,1333" // end state, aka full around the circle
          cx="300"
          cy="300"
          r="212"
        />
        <circle
          class="animated-icon-group--inner-circle"
          cx="300"
          cy="300"
          r="207"
        />
        <path
          class="animated-icon-group--icon"
          d="M278.9308 253.1923h43.5769v20.0539h.5923c6.0923-11.5077 20.9-23.6077 43.0692-23.6077 46.0308 0 54.577 30.2923 54.577 69.723v80.2154h-45.4385v-71.1615c0-17.0077-.2539-38.8385-23.6077-38.8385-23.6923 0-27.2462 18.5308-27.2462 37.5693v72.4307h-45.4384l-.0846-146.3846zm-74.1231 0h45.523V399.577h-45.523V253.1923zm22.8461-72.7692c14.5539 0 26.4 11.8461 26.4 26.4 0 14.5538-11.8461 26.4-26.4 26.4-14.6384 0-26.4-11.8462-26.4-26.4 0-14.5539 11.7616-26.4 26.4-26.4z"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  )
}

export const githubSVG = (size = 55) => {
  return (
    <svg
      width={size}
      height={size}
      className="fill-theme-text"
      viewBox="0 0 600 600"
    >
      <title>Github</title>
      <g class="animated-icon-group" fill="none" fill-rule="evenodd">
        <circle
          class="animated-icon-group--outline"
          stroke-width="40"
          stroke-dasharray="1333,1333" // end state, aka full around the circle
          cx="300"
          cy="300"
          r="212"
        />
        <circle
          class="animated-icon-group--inner-circle"
          cx="300"
          cy="300"
          r="207"
        />
        <path
          class="animated-icon-group--icon"
          d="M300 150c-82.8348 0-150 68.8393-150 153.817 0 67.9687 42.991 125.558 102.5893 145.9151 7.5 1.4063 10.2455-3.3482 10.2455-7.433 0-3.683-.134-13.3259-.2009-26.183-41.7187 9.308-50.558-20.625-50.558-20.625-6.8304-17.7456-16.6741-22.5-16.6741-22.5-13.5938-9.576 1.0044-9.375 1.0044-9.375 15.067 1.0714 22.9688 15.8705 22.9688 15.8705 13.3929 23.5045 35.0893 16.741 43.6607 12.7902 1.3393-9.9107 5.2232-16.741 9.509-20.558-33.2813-3.884-68.3036-17.076-68.3036-76.0045 0-16.808 5.8259-30.5357 15.4018-41.25-1.5402-3.884-6.6965-19.5536 1.4732-40.7143 0 0 12.5893-4.1518 41.25 15.7366 11.9866-3.4152 24.7768-5.0893 37.567-5.1562 12.7231.067 25.5803 1.741 37.5669 5.1562 28.6607-19.8884 41.183-15.7366 41.183-15.7366 8.1697 21.1607 3.0134 36.8304 1.4733 40.7143 9.5758 10.7812 15.4017 24.509 15.4017 41.25 0 59.0625-35.0892 72.0536-68.5044 75.8705 5.3571 4.7545 10.1785 14.1295 10.1785 28.4598 0 20.558-.2009 37.1652-.2009 42.1875 0 4.0849 2.6786 8.9063 10.3125 7.3661C407.076 429.308 450 371.7187 450 303.817 450 218.8393 382.8348 150 300 150z"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  )
}

export const emailSVG = (size = 55) => {
  return (
    <svg
      width={size}
      height={size}
      className="fill-theme-text"
      viewBox="0 0 600 600"
    >
      <title>Email</title>
      <g class="animated-icon-group" fill="none" fill-rule="evenodd">
        <circle
          class="animated-icon-group--outline"
          stroke-width="40"
          stroke-dasharray="1333,1333" // end state, aka full around the circle
          cx="300"
          cy="300"
          r="212"
        />
        <circle
          class="animated-icon-group--inner-circle"
          cx="300"
          cy="300"
          r="207"
        />
        <svg viewBox="-12 -12 47.75 47.75" class="animated-icon-group--icon">
          <path
            d="M4.49998,12 C4.49998,7.85786 7.85784,4.5 12,4.5 C17.0506,4.5 19.9167,8.66698 19.5092,12.3343 C19.3971,13.3426 19.108,13.8915 18.8873,14.1835 C18.6266,14.5284 18.1554,14.8542 17.703,14.838 C17.3723,14.8262 17.4712,14.3628 17.4925,14.1493 L17.9926,9.14926 C18.075,8.32495 17.4736,7.58988 16.6493,7.50744 C16.2585,7.46837 15.8879,7.58294 15.5972,7.80208 C14.6374,6.99382 13.3961,6.5 12.0305,6.5 C9.00785,6.5 6.49998,8.94763 6.49998,12 C6.49998,15.0558 9.01843,17.5 12.0377,17.5 C13.167,17.5 14.2392,17.1554 15.1338,16.5541 C15.2968,16.7752 15.491,16.9787 15.7176,17.1581 C16.8264,18.0361 18.3002,18.0269 19.6707,17.3416 C20.0525,17.1508 20.6953,16.7667 21.2805,15.9925 C21.8658,15.2182 22.3267,14.1421 22.4908,12.6657 C23.0834,7.33302 18.9493,1.5 12,1.5 C6.20099,1.5 1.49998,6.20101 1.49998,12 C1.49998,17.799 6.20099,22.5 12,22.5 C13.6736,22.5 15.2598,22.1073 16.6675,21.4078 C17.4094,21.0391 17.7119,20.1388 17.3433,19.3969 C16.9746,18.6551 16.0743,18.3525 15.3324,18.7212 C14.3303,19.2192 13.2001,19.5 12,19.5 C7.85784,19.5 4.49998,16.1421 4.49998,12 Z M9.49998,12 C9.49998,10.6341 10.6349,9.5 12.0305,9.5 C13.639,9.5 14.8381,10.9814 14.5144,12.516 C14.2733,13.6589 13.2333,14.5 12.0377,14.5 C10.6386,14.5 9.49998,13.3625 9.49998,12 Z"
            fill-rule="nonzero"
          />
        </svg>
      </g>
    </svg>
  )
}

const Header = () => {
  const { socialData } = React.useContext(DataContext)

  return (
    <header>
      <div className="container flex items-center md:flex-row mb-20">
        <Link className="cursor-default mr-5 px-4 animated-link" href="/">
          <p className="font-medium text-theme-highlight text-4xl animated-link-group pb-0.5">
            amyliu
          </p>
        </Link>
        <nav className="mt-1 flex items-center text-base justify-center">
          <Link
            className="cursor-pointer mr-2 animated-icon"
            href={socialData.linkedin}
          >
            {linkedinSVG()}
          </Link>
          <Link
            className="cursor-pointer mr-2 animated-icon"
            href={socialData.github}
          >
            {githubSVG()}
          </Link>
          <Link
            className="cursor-pointer mr-2 animated-icon"
            href={socialData.email}
          >
            {emailSVG()}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
