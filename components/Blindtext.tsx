import { LoremIpsum } from 'lorem-ipsum'
import { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import words from '../words.json'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
  words,
})

export const Blindtext = (): JSX.Element => {
  const [paragraphs, setParagraphs] = useState<number>(1)

  const handleChange = (event, newValue) => {
    setParagraphs(newValue)
  }

  const text = lorem.generateParagraphs(paragraphs)

  return (
    <>
      <Typography id="continuous-slider" gutterBottom>
        Absätze
      </Typography>
      <Slider
        value={paragraphs}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="continuous-slider"
      />

      <CopyToClipboard text={text}>
        <Button variant="contained">Kopieren</Button>
      </CopyToClipboard>

      <div>
        <TextField multiline variant="filled" value={text} />
      </div>
    </>
  )
}
