import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./Home";
import ProfileScreen from "./Profile";
import ListScreen from "./List";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    List: { screen: ListScreen }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#afafaf"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
