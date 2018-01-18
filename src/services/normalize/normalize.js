const normalize = (items, categoryId) => {
  let byId = {};
  let ids = [];

  const extractId = string => {
    const splits = string.split('/');
    return splits[splits.length - 2];
  };

  items.forEach(item => {
    const id = extractId(item.link);
    const { media: { m: src }, link, title } = item;

    byId[id] = { id, src, title, link, categoryId };
    ids.push(id);
  });

  return { byId, ids };
};

export default normalize;
