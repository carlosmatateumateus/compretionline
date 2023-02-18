import moment from 'moment';

interface timeAgoProps {
  createdAt: string,
  timeNow: string,
}

export default function timeAgo({ createdAt, timeNow }:timeAgoProps) {
  let time = ""

  let ms = moment(new Date(timeNow),"DD/MM/YYYY HH:mm:ss").diff(moment(new Date(createdAt),"DD/MM/YYYY HH:mm:ss"));
  let d = moment.duration(ms);
  time = Math.floor(d.asHours()) + "h" + moment.utc(ms).format(" mm") +"m";

  console.log(time)

  return time
}