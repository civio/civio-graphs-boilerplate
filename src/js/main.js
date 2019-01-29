import '../scss/main.scss'

import {csv} from 'd3-fetch'
import {timeParse} from 'd3-time-format'
import {AreaChart} from 'civio-graphs-lib'

const parseDate = timeParse('%Y-%m-%d')

// create area chart
const chart = new AreaChart('#chart', {
  height: 360,
  margin: {
    top: 10,
    right: 5,
    bottom: 20,
    left: 20,
  },
})

// load data
csv('https://data.civio.es/elboenuestrodecadadia/butano-precio/butano-precio.csv')
  .then(data => {
    // setup & render chart
    chart
      .setup(data.map(d => ({ date: parseDate(d.fecha), value: +d.total })))
      .render()
  })
