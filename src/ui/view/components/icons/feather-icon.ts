import '@/ui/view/components/singles/wrapper'
import { iconsStyles } from '@/ui/view/styles'
import { raw } from 'lithen-tag-functions'

export const featherIcon = () => raw`
  <ignem-wrapper class="feather-icon" css="${iconsStyles}">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
      <line x1="16" y1="8" x2="2" y2="22"></line>
      <line x1="17.5" y1="15" x2="9" y2="15"></line>
    </svg>
  </ignem-wrapper>
`
