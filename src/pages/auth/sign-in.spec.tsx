import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '../../lib/react-query'
import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should set default email value if email is present an search params', () => {
    const wrapper = render(
      <>
        <SignIn />
      </>,

      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/sign-in?email=johndoe@gmail.com']}>
              <HelmetProvider>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
              </HelmetProvider>
            </MemoryRouter>
          )
        },
      },
    )

    wrapper.debug()
    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLAnchorElement

    expect(emailInput.value).toEqual('johndoe@gmail.com')
    // expect(wrapper.getByText('About').dataset.current).toEqual('false'
  })
})
