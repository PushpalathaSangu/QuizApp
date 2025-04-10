// randamize the answers to the questions



// utils.ts
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);