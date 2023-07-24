import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Home } from './index'

const meta: Meta<typeof Home> = {
  title: 'Example/HomePage',
  component: Home,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/Counter'
    }
  }
} satisfies Meta<typeof Home>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
