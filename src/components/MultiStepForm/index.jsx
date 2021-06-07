/* eslint-disable default-case */
import React, { useContext } from 'react';

import { GlobalContext } from '../../contexts/AppContext';

import { Progress } from '../Progress';

import { Step1 } from '../Steps/Step1';
import { Step2 } from '../Steps/Step2';
import { Step3 } from '../Steps/Step3';
import { Step4 } from '../Steps/Step4';
import { Step5 } from '../Steps/Step5';
import { Confirmation } from '../Steps/Confirmation';
import { Success } from '../Steps/Success';

export const MultiStepForm = () => {
	const { formData, setForm, step, navigation  } = useContext(GlobalContext);

	const props = { formData, setForm, navigation };

	switch (step.id) {
		case 'step1':
			return (
				<>
					<Progress {...props} />
					<Step1 {...props} />
				</>
			);
		case 'step2':
			return (
				<>
					<Progress {...props} />
					<Step2 {...props} />
				</>
			);
		case 'step3':
			return (
				<>
					<Progress {...props} />
					<Step3 {...props} />
				</>
			);
		case 'step4':
			return (
				<>
					<Progress {...props} />
					<Step4 {...props} />
				</>
			);
		case 'step5':
			return (
				<>
					<Progress {...props} />
					<Step5 {...props} />
				</>
			);
		case 'step6':
			return (
				<>
					<Progress {...props} />
					<Confirmation {...props} />
				</>
			);
		case 'step7':
			return (
				<>
					<Success {...props} />
				</>
			);
	}
};
