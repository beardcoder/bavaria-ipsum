import { LoremIpsum } from 'lorem-ipsum'
import { useState, ReactElement } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { renderToStaticMarkup } from 'react-dom/server'
import words from '../words.json'

export const Blindtext = (): JSX.Element => {
  const [paragraphs, setParagraphs] = useState<number>(1)
  const [length, setLength] = useState<number>(1)

  const textLength = {
    1: {
      sentencesPerParagraph: {
        min: 2,
        max: 4,
      },
      wordsPerSentence: {
        min: 2,
        max: 8,
      },
    },
    2: {
      sentencesPerParagraph: {
        min: 4,
        max: 8,
      },
      wordsPerSentence: {
        min: 4,
        max: 16,
      },
    },
    3: {
      sentencesPerParagraph: {
        max: 16,
        min: 8,
      },
      wordsPerSentence: {
        max: 32,
        min: 8,
      },
    },
  }

  const lorem = new LoremIpsum({
    ...textLength[length],
    words,
  })

  const text = lorem.generateParagraphs(paragraphs)
  const html = (text.split('\n').map((item, key) => {
    return <p key={key}>{item}</p>
  }) as unknown) as ReactElement

  return (
    <>
      <label htmlFor="paragraphs">Absätze ({paragraphs})</label>
      <input
        className=""
        type="range"
        id="paragraphs"
        min="1"
        max="50"
        step="1"
        value={paragraphs}
        onChange={(event) => setParagraphs(parseInt(event.target.value))}
      />
      <label htmlFor="paragraphs">Länge ({length})</label>
      <input
        className=""
        type="range"
        id="paragraphs"
        min="1"
        max="3"
        step="1"
        value={length}
        onChange={(event) => setLength(parseInt(event.target.value))}
      />

      <CopyToClipboard text={text}>
        <button>Kopieren als Text</button>
      </CopyToClipboard>

      <CopyToClipboard text={renderToStaticMarkup(html)}>
        <button>Kopieren als HTML</button>
      </CopyToClipboard>

      <div>{html}</div>
    </>
  )
}
