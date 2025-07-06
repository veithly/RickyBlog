/// <reference types="mdast" />
import { h } from 'hastscript'

/**
 * Creates a Mermaid diagram component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.code - The Mermaid diagram code.
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created Mermaid component.
 */
export function MermaidComponent(properties, children) {
  if (!properties.code) {
    return h('div', { class: 'hidden' }, 'Invalid Mermaid diagram: missing code property')
  }

  const mermaidId = `mermaid-${Math.random().toString(36).slice(-6)}`

  return h(
    `div#${mermaidId}`,
    {
      class: 'mermaid-container glass-card',
      'data-mermaid-code': properties.code
    },
    [
      h('div', { class: 'mermaid-diagram' }, properties.code)
    ]
  )
}
