import { toHtmlAttributes } from '@/ui/helpers'
import { html, raw } from 'lithen-tag-functions'

type IgnemInputProps = {
  label?: string
  className?: string
  name: string
  type?: string
  placeholder?: string
}

export function ignemInput(props: IgnemInputProps) {
  const { label, className, ...attributes } = props

  return html`
    <label>
      ${label && raw`<span>${label}</span>`}
      <input
        ${className && `class="${className}"`}
        ${toHtmlAttributes(attributes)}
      />
      <span class="input-message"></span>
    </label>
  `
}
