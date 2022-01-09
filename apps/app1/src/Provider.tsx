import React from 'react';
import { UiProvider } from 'ui';

import { App } from './App';

export const Provider = (): React.ReactElement => (
	<React.StrictMode>
		<UiProvider>
			<App />
		</UiProvider>
	</React.StrictMode>
);

export default Provider;
