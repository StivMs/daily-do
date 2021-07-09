import React from 'react'
import Gradient from 'rgt'
import { makeStyles } from '@material-ui/core/styles';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { Button } from '@material-ui/core';

const Header = ({ totalTodos, onShowTodo, showAddLabel }) => {
    const classes = useStyles({ showAddLabel })


    const wrapperFunc = () => {
        // Show the input for new Todo-object
        onShowTodo()
    }

    return (
        <header className='header'>
            <h1 className={classes.label}>
                <Gradient
                    dir="left-to-right"
                    from="#00DFD8"
                    to="#007CF0">
                    DailyDo
                     <PlaylistAddCheckIcon className={classes.icon} />
                </Gradient>
            </h1>
            {totalTodos <= 0 ? null :
                <h2>You have total of {totalTodos} todos
                     <Button className={classes.inputButton}
                        onClick={wrapperFunc}>
                        {showAddLabel ? "Hide input" : "Show Input "}
                    </Button>
                </h2>}



            {}
        </header>
    )
}

const useStyles = makeStyles({
    label: {
        fontSize: '10vh',
    },

    icon: {
        fontSize: '10vh'
    },
    inputButton: {
        backgroundColor: props =>
            props.showAddLabel ? "#E57373" : "#04CA83",
        marginLeft: 15,

        "&:hover": {
            backgroundColor: props =>
                props.showAddLabel ? "#E57373" : "#04CA83"
        }

    }
})

Header.defaultProps = {
    totalTodos: 'none'
}
export default Header


