import { Meta, StoryObj } from '@storybook/react'

import { Counter } from './index'

const meta: Meta<typeof Counter> = {
  title: 'Example/Counter',
  component: Counter
} satisfies Meta<typeof Counter>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
