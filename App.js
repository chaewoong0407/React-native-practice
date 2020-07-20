import React, {useState} from 'react';
import { StyleSheet, Button, View } from 'react-native';

const App = () => {
  const [count, setcount] = useState(0);
  //  }>{count}</Button>

    return (
      <View style={styles.container}>
        <Button color="green" styled={styles.container} title={count.toString()} onPress={() => setcount(count + 1)}/>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;