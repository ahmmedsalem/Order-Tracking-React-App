import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useAPI } from "./../Context/ContextAPI";


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.root}`]: {
    left: 'calc(48% + 20px)',
    right: 'calc(-52% + 20px)',
  },
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    fontFamily: 'cairo',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:
        '#ff0000',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:
        '#ff0000',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  flexDirection: 'row-reverse',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor:
      '#ff0000',
  }),
  ...(ownerState.completed && {
    backgroundColor:
      '#ff0000',
      transform: 'scale(0.5)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <Inventory2Icon/>,
    2: <AssignmentTurnedInIcon />,
    3: <LocalShippingIcon  sx={{ transform: 'rotateY(180deg)' }}/>,
    4: <MarkEmailReadIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}


const steps = ['تم إنشاء الشحنة', 'تم استلام الشحنة', 'الشحنة خرجت للتسليم', 'تم التسليم'];

export default function Tracker() {
  
  const { currentStatus } = useAPI();
  const state = currentStatus.state;

  const stepperState = () => {
    if(state === "TICKET_CREATED") {
      return 0;
    } else 
    if(state === "PACKAGE_RECEIVED" || state === "NOT_YET_SHIPPED" || state === "WAITING_FOR_CUSTOMER_ACTION") {
      return 1;
    } else
    if(state === "OUT_FOR_DELIVERY" || state === "RECEIVED_DELIVERY_LOCATION" || state === "DELIVERED_TO_SENDER" || state === "IN_TRANSIT") {
      return 2;
    } else 
    if(state === "DELIVERED") {
      return 5;
    } else {
      return -1;
    }
  }

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper sx={{ flexDirection: 'row-reverse' }} alternativeLabel activeStep={stepperState()} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
