import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { PieChart, BarChart } from "react-native-chart-kit";



function randomColorFromWhite() {
    var white = [255, 255, 255]; // Màu trắng trong hệ màu RGB
    // Thêm một lượng ngẫu nhiên của màu RGB cho màu trắng
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var newColor = [white[0] + red, white[1] + green, white[2] + blue];
    return newColor;
}

const data1 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, -43]
      }
    ]
  };

// Sử dụng hàm để tạo ra một màu ngẫu nhiên từ


const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

//   function handleSelect(event) {
//     let entry = event.nativeEvent
//     if (entry == null) {
//       this.setState({...this.state, selectedEntry: null})
//     } else {
//       this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
//     }

//     console.log(event.nativeEvent)
//   }

export default function CharScreen(params) {
    return (
      <View style={styles.container}>
        <PieChart
            data={data}
            width={360}
            height={250}
            chartConfig={{
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"10"}
        />
        <BarChart
            // style={graphStyle}
            data={data1}
            width={360}
            height={220}
            yAxisLabel="$"
            fromZero = {true}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            />
        </View>
    );
    
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
  },
  chart: {
    flex: 1
  }
});