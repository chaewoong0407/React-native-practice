import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import TestComponent from './TestComponent';


const datas = [
  {id:"dkscodnd", count: 0, color: "red"},
  {id:"youngjae", count: 0, color: "blue"},
  {id:"hmoon", count: 0, color: "green"}
]

const App = () => {


  const [data, setData] = useState(datas);

  const _setDatas = (id) => {
        const newData = [...datas];
        newData[id].count = newData[id].count + 1;

        setData(newData);
  };

    return (
      <View style={styles.container}>
        {
          data.map((data, id) => {
            return(
              <TestComponent
                key={data.id}
                id={data.id}
                title={data.count.toString()}
                color={data.color}
                count={() => _setDatas(id)}/>
            )
          })
        }
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});

export default App;