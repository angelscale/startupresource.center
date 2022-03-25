function extractContent(_content) {
  const content = {};
  const props = _content.props.children;

  content.description = props[2];
  content.offer = props[6];
  content.unique = props[10];
  content.do = props[14];
  content.pricing = props[18];
  content.about = props[22];

  props[2].props.children.forEach((prop) => {
    if (typeof prop !== 'string') {
      content.link = prop;
    }
  });

  return content;
}

export { extractContent };
