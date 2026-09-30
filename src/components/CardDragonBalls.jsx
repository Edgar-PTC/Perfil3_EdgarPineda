import { Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const CardDragonBalls = ({ Sayayin }) => {
  const [ open, setOpen ] = useState(false);

  return (
    <TouchableOpacity onPress={() => setOpen(!open)} className="bg-white rounded-lg p-1 mb-5 shadow-lg shadow-black/25 elevation-5 gap-2">
      <View className="w-full flex flex-row gap-2">
        <Image
          source={{ uri: Sayayin.image }}
          className="aspect-[4/3] w-28 bg-amber-100"
          resizeMode="cover"
        />
        <View className="flex-1">
          <View className="flex p-2 w-full flex-col gap-2">
            <Text className="text-2xl">{Sayayin.name}</Text>
            {Sayayin.isDestroyed && (
              <View className="flex flex-row w-full items-center justify-center">
                <Ionicons name="trash" size={20} color="#b91c1c" />
                <Text className="text-red-700 text-lg">Destroyed</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      {open && (
        <View className="w-full items-center justify-center p-2 border-t border-dashed">
          <Text className="text-justify text-lg">{Sayayin.description}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CardDragonBalls;