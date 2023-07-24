import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { HomePage } from './index'

const meta: Meta<typeof HomePage> = {
  title: 'Example/HomePage',
  component: HomePage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/Counter'
    }
  }
} satisfies Meta<typeof HomePage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
