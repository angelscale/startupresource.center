import MomentAdapter from '@date-io/moment';

export const getFormattedDate = (date) => {
  const dateMoment = new MomentAdapter();
  const toDate = dateMoment.date(date);

  return toDate.format('MMMM DD, YYYY');
};
