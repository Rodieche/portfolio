import MESSAGES from '../..//helpers/texts';
import './Presentation.css';

import { Typography } from 'keep-react'

import { Col, Grid, Row } from 'react-flexbox-grid';
import { CopyText } from '../copyText/copyText';
import { BadgeComponent } from '../badge/badge';


export const Presentation = () => {
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
          <div style={{ marginTop: '30px' }}>
            <BadgeComponent />        
          </div>
          <div style={{ marginTop: '30px' }}>
            <CopyText />
          </div>
          <div style={{ marginTop: '30px' }}>
            <button>
              <i className='fa-solid fa-cloud-arrow-down'></i>&nbsp;
              Download CV
            </button>
          </div>
        </Col>
      </Row>
    </Grid>
  )
}
