export function timeDifference(current: number, previous: number) {
  const elapsedInMilliseconds = current - previous;

  return Math.round(elapsedInMilliseconds / 1000);
}
