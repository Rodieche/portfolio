import MESSAGES from '../../helpers/texts';
import { Typography } from 'keep-react'
import { Col, Grid, Row } from 'react-flexbox-grid';

export const Projects = () => {
    return (
        <Grid fluid>
            <Row center='xs' middle='xs'>
                <Col lg={6} xs={12}>
                    <Typography variant="heading-3">{ MESSAGES.PROJECTS_TITLE }</Typography>
                </Col>
            </Row>
        </Grid>
    )
}
