import path from 'node:path'
import postcss from 'postcss'
import elementTags from '.'
import { expect, test } from 'vitest'
import tailwindcss from 'tailwindcss'

// Custom CSS matcher
expect.extend({
  // Compare two CSS strings with all whitespace removed
  // This is probably naive but it's fast and works well enough.
  toMatchCss(received, argument) {
    function stripped(string_) {
      return string_.replaceAll(/\s/g, '').replaceAll(';', '')
    }

    const pass = stripped(received) === stripped(argument)

    return {
      pass,
      actual: received,
      expected: argument,
      message: () => pass ? 'All good!' : 'CSS does not match',
    }
  }
})

// Function to run the plugin
function run(config, css = '@tailwind utilities', plugin = tailwindcss) {
  let { currentTestName } = expect.getState()

  config = {
    ...{
      plugins: [elementTags],
      corePlugins: {
        preflight: false,
      }
    },
    ...config,
  }

  return postcss(plugin(config)).process(css, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

test('addVariant direct child', () => {
  const config = {
    content: [
      {
        raw: String.raw`<div class="div:hidden"></div>`
      }
    ],
  }

  return run(config).then(result => {
    expect(result.css).toMatchCss(String.raw`
.div\:hidden > div {
    display: none
      }
    `)
  })
})


test('addVariant direct descendant', () => {
  const config = {
    content: [
      {
        raw: String.raw`<div class="_div:hidden"></div>`
      }
    ],
  }

  return run(config).then(result => {
    expect(result.css).toMatchCss(String.raw`
._div\:hidden div {
    display: none
      }
    `)
  })
})
