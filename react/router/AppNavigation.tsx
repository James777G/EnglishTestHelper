import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import StartPage from "../pages/StartPage.tsx";
import NextPage from "../pages/NextPage.tsx";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="StartPage" component={StartPage} options={{title: '首页'}}/>
                <Stack.Screen name="NextPage" component={NextPage} options={{title: '功能页'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}