import 'twin.macro';
import React from 'react';
import { Button } from 'ui';

export const App = (): React.ReactElement => {
	return (
		<div>
			<h1>Hello Parcel With css-in-js</h1>
			<Button type="primary" onClick={() => alert('parcel app')}>
				Click
			</Button>
		</div>
	);
};

export default App;
