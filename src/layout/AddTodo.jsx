import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const AddTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [category, setCategory] = useState('General')
    const classes = useStyles();


    const addTask = () => {

        if (!title || !text) alert('Please add text into the fields')
        else {
            onAddTodo({ title, text, category })
            setTitle('')
            setText('')
        }

    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <TextField
                    className={classes.inputField}
                    label="Add a new task"
                    name="title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    className={classes.inputField}
                    label="Add a description"
                    name="text"
                    variant="outlined"
                    value={text}
                    multiline
                    rows={4}
                    rowsMax={Infinity}
                    onChange={(e) => setText(e.target.value)}
                />

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="category-native-simple">Category</InputLabel>
                    <Select
                        native
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        inputProps={{
                            name: 'Category',
                            id: 'category-native-simple',
                        }}
                    >
                        <option value={"General"}>General</option>
                        <option value={"Study"}>Study</option>
                        <option value={"Work"}>Work</option>
                    </Select>
                </FormControl>

                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={addTask}>
                    Add a new todo</Button>
            </div>

        </React.Fragment>
    )
}

const useStyles = makeStyles({
    root: {
        padding: 5,
        textAlign: 'center'
    },
    inputField: {
        display: "flex",
        width: "40vw",
        margin: '0 auto',
        marginTop: 20
    },
    button: {
        marginTop: 20,
        margin: '0 auto',
        display: "block",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 50,
        padding: '0 30px',
    },
    formControl: {
        minWidth: 120,
        marginTop: 15
    }


});

export default AddTodo