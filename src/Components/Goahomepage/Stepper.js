import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Goa1 from '../../Assets/Goa1.jpg';
import { Grid } from '@material-ui/core';
import Goa2 from '../../Assets/Goa2.png';
import Goa3 from '../../Assets/Goa3.png';
import Goa4 from '../../Assets/Goa4.png';
import Goa5 from '../../Assets/Goa5.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      Goa5,
  },
  {
    imgPath:
      Goa1,
  },
  {
    imgPath:
      Goa2,
  },
  {
    imgPath:
      Goa3,
  },
  {
    imgPath:
      Goa4,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 0,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    margin: 10,
  },
  stepper:{
    backgroundColor: 'white',
  },
  img: {
    height: '100%',
    display: 'block',
    maxWidth: 1200,
    overflow: 'hidden',
    width: '100%',
  },
  button: {
    color: 'purple',
  }
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} className={classes.button}>
          
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} className={classes.button}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}         
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
