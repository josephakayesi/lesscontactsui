import React from 'react'
import { Menu, Grid } from 'semantic-ui-react'

export default function Header() {
	return (
		<Menu secondary style={{ marginTop: '15px' }}>
            <Menu.Item>
                <img src="https://res.cloudinary.com/tutcan/image/upload/v1650240701/little%20brother/icon.png"  />
            </Menu.Item>
		</Menu>
	)
}