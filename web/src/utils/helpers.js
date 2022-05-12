import MomentAdapter from '@date-io/moment';

export const getFormattedDate = (date) => {
  const dateMoment = new MomentAdapter();
  const toDate = dateMoment.date(date);

  return toDate.format('MMMM DD, YYYY');
};

export const extractProductContent = (_content) => {
  const content = {};
  const props = _content.props.children;

  content.description = props[0].props.children[1];
  content.features = props[4].props.children;
  content.unique = props[8].props.children;
  content.bestFor = props[12].props.children;
  content.pricing = props[16].props.children;
  content.info = props[20]?.props?.children;

  return content;
};
