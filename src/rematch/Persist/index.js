import AsyncStorage from "@react-native-community/async-storage";
import createPersistPlugin from "@rematch/persist";

export const persistPlugin = createPersistPlugin({
  key: "root",
  whitelist: ["User", "taskModel"],
  version: 1,
  storage: AsyncStorage,

});
