import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMDeployModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange, onBlur}) {

	let formName = "PM_DEPLOY_FORM";
	let formTitle = "Deploys";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup}
    	appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} inputChange={inputChange}/>
    );
}


PMDeployModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  onBlur: PropTypes.func
};
