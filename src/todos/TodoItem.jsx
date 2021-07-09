import React from 'react'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteRounded'
import Chip from '@material-ui/core/Chip';
import Study from '@material-ui/icons/MenuBook';
import Work from '@material-ui/icons/Work';
import General from '@material-ui/icons/AssignmentInd';
import Grid from '@material-ui/core/Grid';


// Save the value of the input in setstate

const TodoItem = ({ todo, onDelete, index }) => {
    const { title, text, category } = todo
    const [chipColor, setChipColor] = useState('')
    const classes = useStyles({ chipColor });

    const iconToShow = () => {
        if (category === 'General') {
            return <General />
        } else if (category === 'Work') {
            return <Work />
        } else if (category === 'Study') {
            return <Study />
        }
    }


    useEffect(() => {
        if (category === 'General') {
            setChipColor('#F6C197')
        } else if (category === 'Work') {
            setChipColor('#8186D4')
        } else if (category === 'Study') {
            setChipColor('#04CA83')
        }
    }, [category])


    /* setChipColor('#F6C197')
 } else if (category === 'Work') {
     setChipColor('#8186D4')
 } else if (category === 'Study') {
     setChipColor('#04CA83')
 */

    return (

        <Grid className={classes.grid} item xs={8} md={5}>
            <Card className={classes.root}>
                <CardContent >
                    <div>
                        <Typography variant="h4">
                            {title}
                        </Typography>
                    </div>
                    <Typography variant="body2" className={classes.body}>
                        {text}
                    </Typography>
                    <IconButton className={classes.deleteButton}
                        aria-label="delete"
                        onClick={() => onDelete(index)}>
                        <DeleteIcon className={classes.deleteButton} />
                    </IconButton>
                    <Chip className={classes.chip}
                        label={category} icon={iconToShow()} />
                </CardContent>

            </Card>
        </Grid >
    )
}

const useStyles = makeStyles({

    root: {
        flexGrow: 1,
        margin: '0 auto',
        borderRadius: 10,
        marginTop: '15px',
        marginBottom: '15px',

        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',


        border:
            '1px solid rgba(255, 255, 255, 0.18)',
        transition: "0.3s",
        //boxShadow: "2px 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"

        },

    },
    grid: {

        margin: '0 auto',

    },


    chip: {
        float: 'right',
        margin: 10,
        backgroundColor: props => props.chipColor
    },

    body: {
        fontSize: 16,
        whiteSpace: 'pre-wrap'
    },

    deleteButton: {
        float: 'right',
        bottom: 5,

        '&:only-child': {
            fontSize: '1.5em'
        }
    }
});

export default TodoItem