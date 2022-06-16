import { ignemInput, closeIcon, textBetweenDashes, InputMasks } from '@/ui/view'
import { characterModalStyles } from './character-modal-styles'
import { IgnemElement } from '@/ui/view/ignem-element'
import { html } from 'lithen-tag-functions'

export interface IgnemCharacterModalElement extends IgnemElement {
  get dialog(): DialogElement
}

export class IgnemCharacterModal extends IgnemElement {
  get dialog() {
    return this.select<DialogElement>('dialog')!
  }

  styling() {
    return characterModalStyles
  }

  render() {
    const onCloseClick = () => {
      this.select('dialog')?.classList.add('close')
    }

    const onCloseAnimation = (event: AnimationEventInit) => {
      if (event.animationName === 'close-dialog') {
        const dialog = this.select<DialogElement>('dialog')
        dialog?.classList.remove('close')
        dialog?.close()
      }
    }

    const attributes = [
      'strength',
      'dexterity',
      'constitution',
      'intelligence',
      'wisdom',
      'charism'
    ]
    const onInputAttribute = (nextAttribute?: string) => {
      return (e: Event) => {
        const input = e.target as HTMLInputElement
        const inputValue = input.value.trim().replace(/[^0-6]{1}/g, '')

        input.value = inputValue

        if (!inputValue) return

        if (nextAttribute) {
          const query = `input[name=${nextAttribute}]`
          this.select<HTMLInputElement>(query)?.focus()
        } else {
          input.blur()
        }
      }
    }

    const attributesInputs = attributes.map((attr, index, arr) => {
      const captalizedAttribute = attr[0].toUpperCase() + attr.substring(1)

      return html`
        <label class="attr-input-group">
          <span>${captalizedAttribute}</span>
          <input
            name="${attr}"
            type="number"
            on-input=${onInputAttribute(arr[index + 1])}
          />
        </label>
      `
    })

    return html`
      <dialog on-animationend=${onCloseAnimation}>
        <header class="modal-header">
          <h2>Create Character</h2>
          <button class="close-btn" on-click=${onCloseClick}>
            ${closeIcon()}
          </button>
        </header>

        <section class="modal-body">
          <form class="characters-form" is="ignem-form">
            <div class="inputs">
              ${ignemInput({
                label: 'Name',
                name: 'name',
                placeholder: 'Character name',
                className: 'input name'
              })}

              ${ignemInput({
                label: 'Level',
                name: 'level',
                placeholder: 'Ex: 1',
                mask: InputMasks.ONLY_NUMBERS
              })}

              ${ignemInput({
                label: 'Health Points',
                name: 'hp',
                placeholder: 'Ex: 10',
                mask: InputMasks.ONLY_NUMBERS
              })}

              ${ignemInput({
                label: 'Magic Points',
                name: 'mp',
                placeholder: 'Ex: 10',
                mask: InputMasks.ONLY_NUMBERS
              })}
              
              ${ignemInput({
                label: 'Gold',
                name: 'gold',
                placeholder: 'Ex: 100',
                mask: InputMasks.ONLY_NUMBERS
              })}
            </div>

            ${textBetweenDashes('Attributes')}

            <p class="attributes-warn">
              The attributes must have a value between 0 and 6.
            </p>

            <div class="attributes">
              ${attributesInputs}
            </div>
          </form>
        </section>
      </dialog>
    `
  }
}

customElements.define('ignem-character-modal', IgnemCharacterModal)
