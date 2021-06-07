import React, { useContext } from 'react';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';

import { GlobalContext } from './contexts/AppContext';

import GlobalStyle from './styles/global';

function App() {
	const { step } = useContext(GlobalContext);

	return (
		<>
			<Contact />
			<Header />
			<Home />
			{(step.id === 'step7') && (
				<Footer />
			)}
			<GlobalStyle />
		</>
	);
}

export default App;
