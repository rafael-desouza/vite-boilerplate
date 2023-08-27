import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Menu } from './index'

const meta: Meta<typeof Menu> = {
  title: 'Example/Menu',
  component: Menu,
  decorators: [withRouter]
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
