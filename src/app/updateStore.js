import _ from "lodash";

export default function updateStore(store, field, val) {
  const storeCopy = _.cloneDeep(store);

  //check if val is an object & not null
  if (typeof val === "object" && val !== null) {
    const valCopy = _.cloneDeep(val);
    storeCopy[field] = valCopy;
  } else {
    storeCopy[field] = val;
  }
  return storeCopy;
}
