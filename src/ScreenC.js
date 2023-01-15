import { Button, Text, View } from "react-native"

export default (props) => {
  const { navigation, route } = props
  const { navigate, push, goBack, canGoBack } = navigation
  const { params } = route
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>이것은 ScreenC 입니다.</Text>
      {params && (
        <Text>{params.value}</Text>
      )}
      <Button
        title="A로 이동"
        onPress={() => {
          navigate("ScreenA", { "value": "ScreenC에서 받은 데이터입니다." })
        }}
      />
      <Button
        title="B로 이동"
        onPress={() => {
          push("ScreenB", { "value": "ScreenC에서 받은 데이터입니다." })
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