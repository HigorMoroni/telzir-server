import React from 'react';
import {
  Grid,
  Card,
  CardActions,
  Button,
  Container,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';
import { StarBorder as StarIcon } from '@material-ui/icons';

const plans = [
  { minutes: '30', color: '#26acdf' },
  { minutes: '60', color: '#f9b233' },
  { minutes: '120', color: '#e02e30' },
];

const description = [
  'Ligações de Longa Distância',
  'Suporte 24h',
  'Todos os beneficios da Telzir'
]

const Cards = ({ estilo }) => {
  const classes = estilo;
  return (
    <Container maxWidth="md" component="main" style={{marginTop: 30}}>
      <Grid container spacing={5} alignItems="flex-end">
        {plans.map((plan) => (
          <Grid item key={plan.minutes} xs={12} sm={plan.minutes === '60' ? 10 : 8} md={4}>
            <Card>
              <CardHeader
                title={`FaleMais ${plan.minutes}`}
                subheader={plan.minutes === '60' ? 'Mais Popular' : null}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                action={plan.minutes === '60' ? <StarIcon /> : null}
                className={classes.cardHeader}
                style={{backgroundColor: plan.color, color: 'white'}}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    {plan.minutes}min
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    /mês
                  </Typography>
                </div>
                <ul>
                  <Typography component="li" variant="subtitle1" align="center">
                    {`${plan.minutes} minutos gratuitos`}
                  </Typography>
                  {description.map((line) => (
                    <Typography component="li" variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  href="#simulation"
                  fullWidth
                  variant={plan.minutes === '60' ? 'contained' : 'outlined'}
                  style={{
                    backgroundColor: plan.minutes === '60' ? plan.color : 'none',
                    color: plan.minutes === '60' ? 'white' : plan.color,
                    borderColor: plan.color,
                  }}
                >
                  Faça uma simulação
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Cards;