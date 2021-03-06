import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import createStyles from '@material-ui/core/styles/createStyles';
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles';
import propTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from './Todos/ListTodos'


// Component classes
const useStyles = makeStyles(theme => 
    createStyles({
        mainText: {
            color: theme.palette.black,
            fontSize: '32px',
            marginTop: '100px',
            marginBottom: '32px',
        },
        reactLogo: {
            width: '256px',
            marginBottom: '32px'
        },
    })
)

// Component texts
const i18n = defineMessages({
    frontendIntro: {
        id: 'frontend.intro',
        defaultMessage: 'Voici une simple application exemple avec react, redux, api, tests & plus.'
    }
})

// Component
const Frontend = () => {
    const classes = useStyles();   

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Typography variant="body1" align="center" className={classes.mainText}>
                <FormattedMessage {...i18n.frontendIntro} />
            </Typography>
            <List />
        </Grid>
    )
}

// PropTypes
Frontend.propTypes = {
    intl: propTypes.object
    // x: PropTypes.type
}


export default injectIntl(Frontend)