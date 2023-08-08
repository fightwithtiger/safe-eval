import { describe, expect, it } from 'vitest'
import safeEval from '../src'

describe('matching routes', () => {
  it('should perform string concatenation', () => {
    const code = '"app" + "le"'
    const evaluated = safeEval(code)
    expect(evaluated === 'apple').toBe(true)
  })

  it('should perform simple math', () => {
    const code = '9 + 1'
    const evaluated = safeEval(code)
    expect(evaluated === 10).toBe(true)
  })

  it('should have access to standard JavaScript library', () => {
    const code = 'Math.floor(22/7)'
    const evaluated = safeEval(code)
    expect(evaluated === Math.floor(22 / 7))
  })

  it('should parse JSON', () => {
    const code = '{name: "Tom", hobbies: ["disco dance", "sunbathing"]}'
    const evaluated = safeEval(code)
    expect(evaluated.name === 'Tom')
    expect(evaluated.hobbies[0] === 'disco dance')
    expect(evaluated.hobbies[1] === 'sunbathing')
  })

  it('should parse a function expression', () => {
    const code = '(function square(b) { return b * b; })(5)'
    const evaluated = safeEval(code)
    expect(evaluated === 25)
  })

  it('should support context API', () => {
    const code = '{pid: process.pid, apple: a()}'
    const context = {
      process,
      a() { return 'APPLE' },
    }
    const evaluated = safeEval(code, context)
    expect(evaluated.pid > 0)
    expect(evaluated.apple === 'APPLE')
  })

  it('should include vm options', () => {
    const code = 'foo'
    try {
      safeEval(code, {}, { filename: 'bar.js', timeout: 100 })
    } catch (e) {
      expect((e as any).stack.includes('bar.js'))
    }
  })
})
