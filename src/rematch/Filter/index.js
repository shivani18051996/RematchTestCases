import { createBlacklistFilter } from "redux-persist-transform-filter";

// const auth = createBlacklistFilter('Auth', ['userID']);
const invoice = createBlacklistFilter("Invoice", ["extraVariable"]);
const setUpProperty = createBlacklistFilter("Property", ["property"]);

export const AllFilters = [invoice, setUpProperty];
