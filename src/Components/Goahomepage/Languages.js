import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EnglishLink from './LangButton1';
import HindiLink from './LangButton2';
import KonkaniLink from './LangButton3';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EnglishLink/>
        </AccordionDetails>
        <AccordionDetails>
          <HindiLink/>
        </AccordionDetails>
        <AccordionDetails>
          <KonkaniLink/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
