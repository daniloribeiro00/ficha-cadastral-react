import React, { useEffect } from 'react';
import zxcvbn from 'zxcvbn';

import { Container } from './styles';

export const PasswordMeter2 = ({ password }) => {
    const testResult = zxcvbn(password);

    useEffect(() => {
        switch (testResult.score) {
            case 0:
                document.getElementById('pass2 1').className = 'veryWeak';
                document.getElementById('pass2 2').className = '';
                document.getElementById('pass2 3').className = '';
                document.getElementById('pass2 4').className = '';
                document.getElementById('pass2 5').className = '';
                break;
            case 1:
                document.getElementById('pass2 1').className = 'weak';
                document.getElementById('pass2 2').className = 'weak';
                document.getElementById('pass2 3').className = '';
                document.getElementById('pass2 4').className = '';
                document.getElementById('pass2 5').className = '';
                break;
            case 2:
                document.getElementById('pass2 1').className = 'mid';
                document.getElementById('pass2 2').className = 'mid';
                document.getElementById('pass2 3').className = 'mid';
                document.getElementById('pass2 4').className = '';
                document.getElementById('pass2 5').className = '';
                break;
            case 3:
                document.getElementById('pass2 1').className = 'strong';
                document.getElementById('pass2 2').className = 'strong';
                document.getElementById('pass2 3').className = 'strong';
                document.getElementById('pass2 4').className = 'strong';
                document.getElementById('pass2 5').className = '';
                break;
            case 4:
                document.getElementById('pass2 1').className = 'veryStrong';
                document.getElementById('pass2 2').className = 'veryStrong';
                document.getElementById('pass2 3').className = 'veryStrong';
                document.getElementById('pass2 4').className = 'veryStrong';
                document.getElementById('pass2 5').className = 'veryStrong';
                break;
            default:
                document.getElementById('pass2 1').className = 'veryWeak';
                document.getElementById('pass2 2').className = '';
                document.getElementById('pass2 3').className = '';
                document.getElementById('pass2 4').className = '';
                document.getElementById('pass2 5').className = '';
                break;
        }
    }, [testResult])
    
	return (
		<Container>
			<div className='password'>
				<div id='pass2 1'></div>
				<div id='pass2 2'></div>
				<div id='pass2 3'></div>
				<div id='pass2 4'></div>
				<div id='pass2 5'></div>
			</div>
		</Container>
	);
};
