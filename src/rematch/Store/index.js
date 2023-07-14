import { init } from "@rematch/core";
import logger from "redux-logger";
import * as models from "../models";
import { loadingPlugin } from "../Plugins";
import { persistPlugin } from "../Persist";
// import { logger } from '../Logger/Logger';

export default init({
  models,
  plugins: [loadingPlugin, persistPlugin],
  redux: {
    middlewares: [logger],
    rootReducers: {
      RESET: () => {
        console.log("RESET");
      },
    },
  },
});
