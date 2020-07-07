import { LoremIpsum } from 'lorem-ipsum'
import { useState, ReactElement } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { renderToStaticMarkup } from 'react-dom/server'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {
    createMuiTheme,
    ThemeProvider,
    makeStyles,
} from '@material-ui/core/styles'
import words from '../words.json'

const useStyles = makeStyles({
    root: {
        maxWidth: 420,
    },
})

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#7D9B6B',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
})

export const Blindtext = (): JSX.Element => {
    const [paragraphs, setParagraphs] = useState<number>(5)
    const [length, setLength] = useState<number>(2)
    const classes = useStyles()

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
            <ThemeProvider theme={theme}>
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={2}>
                        <Typography id="discrete-slider-always" gutterBottom>
                            Absätze
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Slider
                            defaultValue={5}
                            aria-labelledby="discrete-slider-always"
                            step={1}
                            min={1}
                            value={paragraphs}
                            onChange={(event, newValue) =>
                                setParagraphs(newValue as number)
                            }
                            valueLabelDisplay="on"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={2}>
                        <Typography id="length-label" gutterBottom>
                            Länge
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Slider
                            defaultValue={5}
                            aria-labelledby="length"
                            step={1}
                            min={1}
                            max={3}
                            value={length}
                            onChange={(event, newValue) =>
                                setLength(newValue as number)
                            }
                            valueLabelDisplay="on"
                        />
                    </Grid>
                </Grid>

                <CopyToClipboard text={text}>
                    <Box mr={2} display="inline-block">
                        <Button variant="outlined" color="primary">
                            Kopieren als Text
                        </Button>
                    </Box>
                </CopyToClipboard>

                <CopyToClipboard text={renderToStaticMarkup(html)}>
                    <Box mr={2} display="inline-block">
                        <Button variant="outlined" color="primary">
                            Kopieren als HTML
                        </Button>
                    </Box>
                </CopyToClipboard>

                <div>{html}</div>
            </ThemeProvider>
        </>
    )
}
