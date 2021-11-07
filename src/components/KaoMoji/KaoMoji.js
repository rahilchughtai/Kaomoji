import React from 'react'
import './KaoMoji.css'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import { Button } from '@material-ui/core';


export const KaoMoji = (props) => {
    const [open, setOpen] = React.useState(false);
    const [currentKaomoji, setKaomoji] = React.useState('');


    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClick = () => { setOpen(true); };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    function handleKaomojiClick(emote) {
        setKaomoji(emote)
        navigator.clipboard.writeText(emote)
        handleClick()
    }



    const listItems = props.entries.map((entry, index) =>
        <div variant="contained" className='child col-4' key={index} onClick={() => handleKaomojiClick(entry.emoticon)}>
            {entry.emoticon}
        </div>
    )

    return (
        <div>


            <Snackbar

                open={open}
                autoHideDuration={1500}
                onClose={handleClose}
                action={action}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}

            >
                <Alert
                    style={{ fontSize: '1.3em' }}
                    onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {`Copied to Clipboard! ${currentKaomoji}`}
                </Alert>
            </Snackbar>


<TouchRipple>
    <div>
        <p>
            Hello there
        </p>
    </div>
</TouchRipple>
            <div className="parent">
                <div className="wrapper container">
                    <div className="row justify-content-center">
                        {listItems}
                    </div>
                </div>
            </div>

        </div>
    )
}


