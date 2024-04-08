import { NavigationContainer } from '@react-navigation/native';
import TabNavigatorScreen from './screens/TabNavigatorScreen';
import EntryEtack from './Navigations/EntryEtack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';

export default function App() {


  return (
    <NavigationContainer>
    

      <EntryEtack />
    
    </NavigationContainer>
      
  );
} 

