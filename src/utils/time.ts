export const MINUTES_IN_HOUR = 60;
export function duration(input: number | string = 0): string {
  const duration = +input || 0;
  let minutes = duration;
  let hours = 0;

  if (duration >= MINUTES_IN_HOUR) {
    minutes = duration % MINUTES_IN_HOUR;
    hours = Math.floor(duration / MINUTES_IN_HOUR);
  }

  const hoursStr = hours ? hours + 'h ' : '';
  const minStr = hoursStr && !minutes ? '' : `${minutes} min`;

  return `${hoursStr}${minStr}`;
}
