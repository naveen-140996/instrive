import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import BusinessDetailsForm from './BusinessDetailsForm';
import ContactDetailsForm from './ContactDetailsForm';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <>
     <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Business Details
        </Typography>
        <BusinessDetailsForm />
        <Typography variant="h4" gutterBottom>
          Contact Details
        </Typography>
        <ContactDetailsForm />
      </Container>
    </Provider>
    </>
   
  );
}

export default App;
