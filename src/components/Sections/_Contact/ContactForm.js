import React from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import TransitionsSnackbar from 'components/UI/Snackbar';
import TextField from 'components/UI/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  input: {
    margin: '10px 0px',
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Name" variant="outlined" className={classes.input} fullWidth />
      <TextField label="Email" variant="outlined" className={classes.input} fullWidth />
      <TextField label="Messages" variant="outlined" className={classes.input} fullWidth multiline rows={4} />
      <Box display="flex" justifyContent="flex-end">
        <Tooltip title={`Yes, this is a real working form. So please stop sending me "test" email T~T`}>
          <InfoOutlinedIcon color="primary" />
        </Tooltip>
      </Box>
      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <TransitionsSnackbar />
      </Box>
    </form>
  );
}
