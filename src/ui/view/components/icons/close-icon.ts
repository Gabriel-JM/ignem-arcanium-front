import '@/ui/view/components/singles/wrapper'
import { iconsStyles } from '@/ui/view/styles'
import { raw } from 'lithen-tag-functions'

export const closeIcon = () => raw`
  <ignem-wrapper class="close-icon" css="${iconsStyles}">
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
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </ignem-wrapper>
`
