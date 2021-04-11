import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from '@material-ui/core/Grid';
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import useAllRecords from "../../../hooks/useAllRecords";
import { useHistory } from "react-router-dom";
import withAPI from "../../hoc/withAPI";



// Component classes
const useStyles = makeStyles(theme =>
    createStyles({
        todosContainer: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(8),
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            fontFamily: 'Arial',
        },
        todoBox: {
            width: '100%',
            margin: theme.spacing(1, 0),
            padding: theme.spacing(1, 1),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: theme.spacing(1),
            border: '1px solid #eeeeee',
            boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.05)',
        },
        todoBoxLeft: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
        },
        todoCheckbox: {
            marginRight: theme.spacing(1),
        },
        todoShowButton: {
            fontFamily: 'Arial',
        }
    })
)



const ListTodos = ({ updateRecord }) => {
    const classes = useStyles()
    const history = useHistory();

    const { loading: loadingTodos, records: todos } = useAllRecords('todos');

    const pushReadTodo = (id) => {
        history.push(`/todos/${id}`)
    }

    const checkTodo = async (id, state) => {
        const attributes = {
            state: !state
        }

        try {
            await updateRecord('todos', id, attributes)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container fixed>
            {
                loadingTodos ? (
                    <p>Loading...</p>
                ) : (
                    <Grid className={classes.todosContainer}>
                        {
                            todos.map((todo) => (
                                <Box key={todo.id} className={classes.todoBox}>
                                    <Box className={classes.todoBoxLeft}>
                                        <Checkbox 
                                            className={classes.todoCheckbox}
                                            checked={todo.state}
                                            onChange={() => { checkTodo(todo.id, todo.state) }}
                                        />
                                        <Typography>
                                            {todo.content}
                                        </Typography>
                                    </Box>
                                    <Button color="secondary" className={classes.todoShowButton} onClick={() => { pushReadTodo(todo.id) }}>Show</Button>
                                </Box>
                            ))
                        }
                    </Grid>
                )
            }
        </Container >
    )
}



export default withAPI(ListTodos)