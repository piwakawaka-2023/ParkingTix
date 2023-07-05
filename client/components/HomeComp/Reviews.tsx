import {
  Button,
  Box,
  Typography,
  Rating,
  Avatar,
  Divider,
  Grid,
  Paper,
} from '@mui/material'
import AddReviewsForm from '../AddReviews'
import { Link } from 'react-router-dom'

const reviewsData = [
  {
    name: 'Brindha',
    color: 'green',
    rating: 4,
    review:
      'Since I am so naughty I forget to pay for parking, luckily I can get out of my fines',
  },
  {
    name: 'Jesse',
    color: 'brown',
    rating: 5,
    review: 'Amazing service. Saved me thousands.',
  },
  {
    name: 'Oscar',
    color: 'purple',
    rating: 5,
    review: 'What an amazing service.',
  },
  {
    name: 'Gemma',
    color: 'orange',
    rating: 4,
    review: 'Who came up with this amazing idea???',
  },
  {
    name: 'Chris',
    color: 'red',
    rating: 5,
    review: 'LOL, just got out of a 120 dollar fine.',
  },
  {
    name: 'Amanda',
    color: 'blue',
    rating: 5,
    review:
      "What the heck? I don't own a car and I got a parking ticket. Thank god for this service.",
  },
]

function Reviews() {
  return (
    <Paper>
      <Box sx={{ pt: 2, pb: 2 }}>
        <Typography variant="h4" sx={{ mt: 1, textAlign: 'center' }}>
          Reviews
          <Button component={Link} to="AddReviewForm">
            Add a review
          </Button>
        </Typography>

        <Grid container spacing={2} sx={{ p: 1 }}>
          {reviewsData.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    my: 1,
                    p: 1,
                    height: '25vh',
                  }}
                >
                  <Avatar sx={{ mr: 2, backgroundColor: review.color }}>
                    {review.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" component="div">
                      {review.name}
                    </Typography>
                    <Rating value={review.rating} readOnly />
                    <Typography variant="body2">{review.review}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  )
}

export default Reviews
