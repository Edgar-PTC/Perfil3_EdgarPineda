import { useEffect } from "react";
import { Text, FlatList, TouchableOpacity, View } from "react-native";
import useDragonBall from "../hooks/useDragonBall";
import CardDragonBalls from "../components/CardDragonBalls";

const DragonBall = ({ navigation }) => {
    const { DragonBall, fetchDragonBall } = useDragonBall();

    useEffect(() => {
        fetchDragonBall();
    }, [])

    return(
        <View className="flex-1 pt-10 pb-10 px-5 bg-blue-200 gap-3">
            <TouchableOpacity onPress={() => navigation.navigate("Home")} className="mt-5 w-full h-12 bg-blue-300 rounded-xl items-center justify-center">
                <Text className="text-white text-2xl italic">Regresar</Text>
            </TouchableOpacity>
            <View className="flex-1 w-full rounded-2xl px-2 gap-7">
                <FlatList
                    className="flex-1"
                    data={DragonBall}
                    renderItem={({ item }) => <CardDragonBalls Sayayin={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default DragonBall;