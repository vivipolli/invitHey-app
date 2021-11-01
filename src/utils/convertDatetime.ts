import moment from 'moment';


export const convertDatetime = (value: string) => {
  const converted = moment(value, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
  const momentDate = moment(converted); 
  return String(momentDate);
}


