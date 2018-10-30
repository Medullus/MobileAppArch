import { Navigation } from 'react-native-navigation';
import ScreenOne from "./example/screenone";
import ScreenTwo from "./example/screentwo";
import ScreenThree from "./example/screenthree";
export function registerScreens (store, Provider) {
Navigation.registerComponent("yourprojectname.screenone", () => ScreenOne, store, Provider);
Navigation.registerComponent("yourprojectname.screentwo", () => ScreenTwo, store, Provider);
Navigation.registerComponent("yourprojectname.screenthree", () => ScreenThree, store, Provider);
}
