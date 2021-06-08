import React, { useEffect } from 'react';
import zxcvbn from 'zxcvbn';

import { Container } from './styles';

export const PasswordMeter3 = ({ password }) => {
    const testResult = zxcvbn(password);

    useEffect(() => {
        switch (testResult.score) {
            case 0:
                document.getElementById('pass3 1').className = 'veryWeak';
                document.getElementById('pass3 2').className = '';
                document.getElementById('pass3 3').className = '';
                document.getElementById('pass3 4').className = '';
                document.getElementById('pass3 5').className = '';
                break;
            case 1:
                document.getElementById('pass3 1').className = 'weak';
                document.getElementById('pass3 2').className = 'weak';
                document.getElementById('pass3 3').className = '';
                document.getElementById('pass3 4').className = '';
                document.getElementById('pass3 5').className = '';
                break;
            case 2:
                document.getElementById('pass3 1').className = 'mid';
                document.getElementById('pass3 2').className = 'mid';
                document.getElementById('pass3 3').className = 'mid';
                document.getElementById('pass3 4').className = '';
                document.getElementById('pass3 5').className = '';
                break;
            case 3:
                document.getElementById('pass3 1').className = 'strong';
                document.getElementById('pass3 2').className = 'strong';
                document.getElementById('pass3 3').className = 'strong';
                document.getElementById('pass3 4').className = 'strong';
                document.getElementById('pass3 5').className = '';
                break;
            case 4:
                document.getElementById('pass3 1').className = 'veryStrong';
                document.getElementById('pass3 2').className = 'veryStrong';
                document.getElementById('pass3 3').className = 'veryStrong';
                document.getElementById('pass3 4').className = 'veryStrong';
                document.getElementById('pass3 5').className = 'veryStrong';
                break;
            default:
                document.getElementById('pass3 1').className = 'veryWeak';
                document.getElementById('pass3 2').className = '';
                document.getElementById('pass3 3').className = '';
                document.getElementById('pass3 4').className = '';
                document.getElementById('pass3 5').className = '';
                break;
        }
    }, [testResult])
    
	return (
		<Container>
			<div className='password'>
				<div id='pass3 1'></div>
				<div id='pass3 2'></div>
				<div id='pass3 3'></div>
				<div id='pass3 4'></div>
				<div id='pass3 5'></div>
			</div>
		</Container>
	);
};
