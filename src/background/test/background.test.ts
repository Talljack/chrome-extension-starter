import { describe, expect, test } from 'vitest'
import { add } from '../background'

describe('test background', () => {
  test('background can correct work', () => {
    expect(add(3, 4)).toBe(7)
  })
})
