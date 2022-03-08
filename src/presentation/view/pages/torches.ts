import { IgnemElement } from '@/presentation/view'
import { css, html } from 'lithen-tag-functions'

const list = [
  {
    characterName: 'Warrior',
    torchCount: 1,
    torchCharge: 3,
    isLit: true
  }
]

export class TorchesPage extends IgnemElement {
  styling() {
    return css`
      .content::part(container) {
        padding: 10px 20px;
      }

      .torches-title {
        font-size: 1.8rem;
        border-bottom: 1px solid #ddd2;
        padding-bottom: 12px;
        margin: 20px 0;
      }
    `
  }

  render() {
    return html`
      <ignem-header />

      <ignem-content-container class="content">
        <h2 class="torches-title">Torches</h2>
        <ul>
          ${list.map(item => {
            return html`
              <li>${JSON.stringify(item, null, 2)}</li>
            `
          })}
        </ul>
      </ignem-content-container>
    `
  }
}

customElements.define('ignem-torches', TorchesPage)