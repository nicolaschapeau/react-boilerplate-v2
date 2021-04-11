import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from '@material-ui/core/Grid';
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import withRecord from '../../hoc/withRecord'



const useStyles = makeStyles(theme =>
    createStyles({
        todoContainer: {
            marginTop: theme.spacing(8),
            padding: theme.spacing(2),
            borderRadius: '8px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'row',
            border: '1px solid #eeeeee',
            boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.05)',
        },
        todoContent: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
        },
        todoActions: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
        },
        todoButtons: {
            margin: theme.spacing(0, 1),
            width: 'auto',
        }
    })
)



const ReadTodo = ({ record: todo, removeRecord, updateRecord }) => {
    const classes = useStyles()
    const history = useHistory();

    

    const pushBackHistory = () => {
        history.goBack()
    }


    const deleteTodo = () => {
        removeRecord().then(
            pushBackHistory()
        )
    }


    const randomizeTodo = () => {
        updateRecord(
            { 
                'content': Math.random().toString(36).substring(7),
                'state': Math.random() < 0.5
            }
        )
    }


    return (
        <Container>
            <Grid className={classes.todoContainer}>
                <Grid className={classes.todoContent}>
                    <Typography variant="h4">
                        ID: {todo.id}
                    </Typography>
                    <Typography variant="body1">
                        Description: {todo.content}
                    </Typography>
                    <Typography variant="body1">
                        Status: {todo.state ? 'Done' : 'Uncompleted'}
                    </Typography>
                </Grid>
                <Grid className={classes.todoActions}>
                    <Button
                        variant="contained"
                        onClick={pushBackHistory}
                        className={classes.todoButtons}
                    >
                        Go back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={randomizeTodo}
                        className={classes.todoButtons}
                    >
                        Randomize
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={deleteTodo}
                        className={classes.todoButtons}
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}



export default withRecord('todos')(ReadTodo)
