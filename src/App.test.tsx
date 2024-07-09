import { render, screen } from '@testing-library/react'

import App from '@/App'

describe('Main App', () => {
  it('should render', () => {
    render(<App />)
    expect(screen.getByTestId('app-id')).toBeInTheDocument()
  })
})
