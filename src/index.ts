import vm from 'vm'
import type { Context, RunningScriptOptions } from 'vm'

export default function safeEval(code: string, context?: Context, options?: RunningScriptOptions | string) {
  const sandbox: Record<string, any> = {}
  const resultKey = `SAFE_EVAL_${Math.floor(Math.random() * 1000000)}`
  sandbox[resultKey] = {}
  code = `${resultKey}=${code}`
  if (context) {
    Object.keys(context).forEach((key) => {
      sandbox[key] = context[key]
    })
  }
  vm.runInNewContext(code, sandbox, options)
  return sandbox[resultKey]
}
