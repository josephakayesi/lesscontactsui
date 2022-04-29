
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Header from './Header'

export default function Layout(props: any) {
	return (
		<Container>
			<Header />
			    {props.children}
		</Container>
	)
}