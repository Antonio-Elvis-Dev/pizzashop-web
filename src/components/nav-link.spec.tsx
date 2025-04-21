import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Navlink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/about">About</Navlink>
      </>,

      {
        wrapper: ({ children }) => {
          return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
        },
      },
    )

    // wrapper.debug()
    expect(wrapper.getByText('Home').dataset.current).toEqual('true')
    expect(wrapper.getByText('About').dataset.current).toEqual('false')
  })
})
