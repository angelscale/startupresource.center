import MomentAdapter from '@date-io/moment';

function getFormattedDate(_date) {
  const dateMoment = new MomentAdapter();
  const toDate = dateMoment.date(_date);

  return toDate.format('MMMM DD, YYYY');
}

export { getFormattedDate };
