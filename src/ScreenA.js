import { Button, Text, View } from "react-native"
import ScreenB from "./ScreenB"

export default (props) => {
  const { navigation, route } = props
  const { navigate, push, goBack, canGoBack } = navigation
  const { params } = route

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>이것은 ScreenA 입니다.</Text>
      {params && (
        <Text>{params.value}</Text>
      )}
      <Button
        title="B로 이동"
        onPress={() => {
          console.log(props)
          navigate("ScreenB", { "value": "ScreenA에서 받은 데이터입니다." })
        }}
      />
      <Button
        title="C로 이동"
        onPress={() => {
          push("ScreenC", { "value": "ScreenA에서 받은 데이터입니다." })
        }}
      />
      <Button
        title="뒤로가기"
        onPress={() => {
          console.log(canGoBack())
          if (canGoBack()) {
            goBack()
          }
        }}
      />
    </View>
  )
}