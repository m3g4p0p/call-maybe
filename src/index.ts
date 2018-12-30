export const callMaybe = (callback?: (...args: any[]) => any, fallback?: any) => function () {
  return typeof callback === 'function' ? callback.apply(this, arguments) : fallback
}
