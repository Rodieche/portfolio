import MESSAGES from './helpers/texts';
import './App.css';

import { Typography } from 'keep-react'

import { Col, Grid, Row } from 'react-flexbox-grid';
import { CopyText } from './components/copyText/copyText';

export const App = () => {

  return (
    <Grid fluid className='margined'>
      <Row center='xs' middle='xs'>
        <Col lg={6} xs={12}>
          <Typography variant="heading-1" className="title">
            I&apos;m &nbsp;
            {
              MESSAGES.ADJETIVES.map((adj,index) => {
                return(
                  <span style={{"--i": index}} data-text={adj.name} key={index}>
                    { adj.name }
                  </span>
                )
              })
            }
          </Typography>
          <p className='text-shadow' style={{ marginTop: '30px' }}>{ MESSAGES.STATEMENT }</p>
          <CopyText />        
        </Col>
      </Row>
    </Grid>
  )
}
