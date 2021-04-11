import * as colors from '../../styles/colors';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import { darken, lighten } from '@material-ui/core/styles/colorManipulator';

const muiTheme = createMuiTheme({
    palette: {
        black: colors.black
    }
})

export default muiTheme;