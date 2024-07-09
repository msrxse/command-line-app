import { renderHook, waitFor } from '@testing-library/react'

import useHelloWorld from '@/hooks/useHelloWorld'

describe('useHelloWorld', () => {
  it('should return default text', async () => {
    const { result } = renderHook(() => useHelloWorld())

    await waitFor(() => expect(result.current).toBe('HelloWorld'))
  })
})
