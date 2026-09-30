import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
    return(
        <ScrollView className="flex-1 py-20 px-5 bg-blue-200">
            <View className="flex flex-col bg-slate-400 h-40 w-full items-center justify-end rounded-2xl py-10 px-5 relative">
                <View className="h-20 w-20 absolute bg-blue-200 p-2 rounded-full bottom-24 flex items-center justify-center">
                    <Ionicons name="accessibility" size={30} color="#3b82f6" />
                </View>
                <Text className="text-2xl italic text-gray-900">Edgar Ariel Pineda Ramírez</Text>
            </View>
            <View className="flex flex-row gap-3 w-full mt-5">
                <View className="flex flex-row bg-slate-400 h-20 flex-1 items-center justify-between rounded-2xl">
                    <View className="h-20 w-20 right-3 bg-blue-200 p-2 rounded-r-full flex items-center justify-center">
                        <Ionicons name="card" size={30} color="#3b82f6" />
                    </View>
                    <View className="flex-1 items-center justify-center">
                        <Text className="text-center text-xl text-white">20230280</Text>
                    </View>
                </View>
                <View className="flex flex-row bg-slate-400 h-20 flex-1 items-center justify-between rounded-2xl">
                    <View className="h-20 w-20 right-3 bg-blue-200 p-2 rounded-r-full flex items-center justify-center">
                        <Ionicons name="finger-print" size={30} color="#3b82f6" />
                    </View>
                    <View className="flex-1 items-center justify-center">
                        <Text className="text-center text-xl text-white">Grupo 2 - A</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("DragonBall")} className="mt-5 w-full h-12 bg-red-700 rounded-xl items-center justify-center">
                <Text className="text-white text-2xl italic">Ir al Dragon Ball</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Home;    