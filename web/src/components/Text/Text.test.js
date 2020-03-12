import { render, cleanup } from '@testing-library/react'

import Text from './Text'

describe('Text', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Text />)
    }).not.toThrow()
  })
})
