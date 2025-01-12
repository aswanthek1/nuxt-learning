export const useColor = () => useState<string>('color', () => 'pink')
export const useCounter = () => useState<Number>("counter", () => 0)