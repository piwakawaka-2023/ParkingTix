import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const faqData = [
  {
    question: 'Is this service free?',
    answer: 'Ofcourse this service is totally free.',
  },
  {
    question: 'Is this illegal?',
    answer: 'I mean, who says it is? We just help you dispute your ticket.',
  },
  {
    question: 'How does it work?',
    answer: 'It works. We do it for you.',
  },
  {
    question: 'I have a lots of parking tickets, help?',
    answer: 'easy.',
  },
  {
    question: 'How many parking tickets can I dispute?',
    answer: 'As many as you want.',
  },
  {
    question: 'How do I use this?',
    answer:
      'Just login, enter you details of your parking ticket and we will handle it for you',
  },

  // Add more FAQ objects as needed
]

function FAQ() {
  return (
    <Paper
      sx={{
        p: 5,
        backgroundImage:
          'url(https://material-kit-pro-react.devias.io/assets/gradient-bg.svg)',
        // backgroundColor: '#063970',
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
          }}
        >
          <Box sx={{ mr: 2 }}>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Everything you need to know
            </Typography>
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              Frequently asked questions
            </Typography>
          </Box>
          <Box>
            {faqData.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                  sx={{ justifyContent: 'flex-end' }}
                >
                  <Typography variant="subtitle1">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default FAQ
