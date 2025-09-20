import { ScrollView, Text, View } from "react-native";
import SectionCard from "../src/components/sectionCard";

import AlbunsCover from "../src/assets/LP-albuns.png";
import HistoryCover from "../src/assets/LP-history.jpg";
import MembersCover from "../src/assets/LP-members.jpg";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-bg px-6 pt-32">
      {/* Título */}
      <Text className="text-title font-title text-2xl text-center mb-2">
        LP Connection
      </Text>

      {/* Subtítulo */}
      <Text className="text-text font-body text-center mb-8">
        Conheça uma das maiores bandas de Nu Metal da história
      </Text>

      {/* Cards */}
      <SectionCard
        title="Albúns"
        description="Explore a discografia"
        cover={AlbunsCover}
        href="/albuns"
      />
      <SectionCard
        title="Historia"
        description="Saiba mais sobre a banda"
        cover={HistoryCover}
        href="/history"
      />
      <SectionCard
        title="Membros"
        description="Conheça os membros do Linkin Park"
        cover={MembersCover}
        href="/members"
      />
    </ScrollView>
  );
}
