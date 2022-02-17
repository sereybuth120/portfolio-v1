import React from 'react';
import MuiPopover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';

const CustomPopover = withStyles((theme) => ({
  paper: {
    border: '1px solid rgba(0, 136, 237, 0.08)',
    boxShadow: '0px 2px 6px rgba(9, 28, 43, 0.15)',
    borderRadius: '8px',
  },
}))(MuiPopover);

export default function Popover({ isOpen, handleClose, children, ...props }) {
  const open = Boolean(isOpen);
  const id = open ? 'simple-popover' : undefined;

  return (
    <CustomPopover
      id={id}
      open={open}
      anchorEl={isOpen}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    >
      {children}
    </CustomPopover>
  );
}
