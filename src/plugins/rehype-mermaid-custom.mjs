import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

/**
 * Custom rehype plugin to replace mermaid code blocks with our MermaidDiagram component
 */
export function rehypeMermaidCustom() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // Look for code blocks with mermaid language
      if (
        node.tagName === 'pre' &&
        node.children &&
        node.children[0] &&
        node.children[0].tagName === 'code' &&
        node.children[0].properties &&
        node.children[0].properties.className &&
        node.children[0].properties.className.includes('language-mermaid')
      ) {
        const codeNode = node.children[0];
        const mermaidCode = codeNode.children[0]?.value || '';
        
        // Create our custom MermaidDiagram component
        const mermaidComponent = h('MermaidDiagram', {
          code: mermaidCode,
          class: 'mermaid-wrapper'
        });
        
        // Replace the pre element with our component
        if (parent && typeof index === 'number') {
          parent.children[index] = mermaidComponent;
        }
      }
    });
  };
}
