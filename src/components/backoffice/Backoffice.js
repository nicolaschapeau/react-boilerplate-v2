import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import createStyles from '@material-ui/core/styles/createStyles';
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles';
import propTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'


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
    backofficeText: {
        id: 'backoffice.welcome.message',
        defaultMessage: 'Welcome to the backoffice.'
    }
})

// Component
const Backoffice = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Typography variant="body1" align="center" className={classes.mainText}>
                <FormattedMessage {...i18n.backofficeText} />
            </Typography>
            <img
                src={process.env.PUBLIC_URL + '/images/react.svg'}
                alt="react boilerplate logo"
                className={classes.reactLogo}
            />
        </Grid>
    )
}

// PropTypes
Backoffice.propTypes = {
    intl: propTypes.object
    // x: PropTypes.type
}


export default injectIntl(Backoffice)