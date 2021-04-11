import { frontendMainColor, backofficeMainColor } from '../styles/colors'
import * as constants from './constants'

/* eslint-disable */
/* env variables */

/* Services map */
export const servicesMap = {
    // apis   --    users: userApi,
}

/* Config for each platform */
export default () => {
    const configurations = {
        [process.env.REACT_APP_FRONTEND_HOST]: {
            appName: 'frontend',
            title: 'frontend website',
            theme: require('./themes/frontend').default,
            routes: require('./routes/frontend').default,
            mainColor: frontendMainColor,
            servicesMap,
            links: {
                home: '/',
                privacy: '/privacy',
                terms: '/terms',
            },
            ...constants,
        },
        [process.env.REACT_APP_BACKOFFICE_HOST]: {
            appName: 'backoffice',
            title: 'backoffice website',
            theme: require('./themes/backoffice').default,
            routes: require('./routes/backoffice').default,
            mainColor: backofficeMainColor,
            servicesMap,
            links: {
                home: '/',
            },
            ...constants,
        }
    }

    if (process.env.NODE_ENV === 'test') {
        return configurations[process.env.REACT_APP_FRONTEND_HOST]
    }

    if (!Object.keys(configurations).includes(window.location.origin)) {
        throw Error(`No valid configuration found for host ${window.location.origin} - ${process.env.REACT_APP_FRONTEND_HOST}`);
    }

    return configurations[window.location.origin];
}