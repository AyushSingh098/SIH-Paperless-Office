import React from 'react'

import  Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NodeStatus from './NodeStatus'

import useStyles from '../Style'


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          DigiDocs 2020
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }




function getStepContent(step,nodesList) {

  return <NodeStatus node = {nodesList[step]} />
  // switch (step) {
  //   case 0:
  //     return <NodeStatus />;
  //   case 1:
  //     return <NodeStatus />;
  //   case 2:
  //     return <NodeStatus />;
  //   default:
  //     throw new Error('Unknown step');
  // }
}

export default function WorkflowStatus({title},{steps},{nodesList}) {

  const steps = steps

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(steps.length -1);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        
         <main className = {classes.layout}>
        <Paper className={classes.paper}> 
          <Typography component="h1" variant="h4" align="center">
            WorkFlow Progress : {}
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  WorkFlow is completed 
                </Typography>
                <Typography variant="subtitle1">
                We have emailed you the completion details, and will
                  send you an update regarding the next steps.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep,nodesList)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
      </Container>
      </main>
            
    )
}
