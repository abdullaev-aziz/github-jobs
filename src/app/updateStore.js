import _ from "lodash";

export default function updateStore(store, field, val) {
  const storeCopy = _.cloneDeep(store);
  storeCopy[field] = val;
  return storeCopy;
}
