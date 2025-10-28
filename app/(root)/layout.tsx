import React from 'react';

const RootLayout = ({children} : {children : React.ReactNode}) => {
  return (
	<main className='relative'>

		{children}
	<footer>Footer</footer>
	</main>
  )
}

export default RootLayout;