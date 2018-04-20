import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import ApplicantDashboard from '../ApplicantDashboard/ApplicantDashboard';
import AdminProgress from '../AdminProgress/AdminProgress';
import FormSubmittedMessage from '../ApplicationForm/FormSubmittedMessage';
import AdminGeneral from '../AdminGeneral/AdminGeneral';
import Navbar from './Navbar';

const Routes = () => (
	<Router>
		<div>
			<Navbar />
			<Route exact path="/" component={ApplicationForm} />
			<Route exact path="/applicant-dashboard" component={ApplicantDashboard} />
			<Route exact path="/admin-general" component={AdminGeneral} />
			<Route exact path="/admin-progress" component={AdminProgress} />
      		<Route exact path="/form-submitted-message" component={FormSubmittedMessage} />
		</div>
	</Router>
);

export default Routes;