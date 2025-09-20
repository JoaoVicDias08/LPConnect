import { TouchableOpacity, View, Text, ImageBackground } from "react-native";
import { Link } from "expo-router";

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  cover: any;
  className?: string;
}

export default function SectionCard({ title, description, href, cover, className }: SectionCardProps) {
  return (
    <Link href={href as string} asChild>
      <TouchableOpacity className={`w-full rounded-lg overflow-hidden shadow-lg h-40 mb-8 ${className}`}>
        <ImageBackground source={cover} className="w-full h-full justify-end">
          <View className="bg-black/50 p-4">
            <Text className="text-title font-title text-lg">{title}</Text>
            <Text className="text-text font-body text-sm mt-1">{description}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Link>
  );
}
