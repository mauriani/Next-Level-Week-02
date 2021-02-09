import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Information from "../../components/Information";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import styles from "./styles";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritesTeachers = JSON.parse(response);

        setFavorites(favoritesTeachers);
      }
    });
  }
  // quando a aba troca ele atualiza
  useFocusEffect(() => {
    loadFavorites();
  });

  console.log(favorites);

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          /*Forma melhor de fazer o padding para esse componente.*/
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.length >= 1 ? (
          favorites.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
          })
        ) : (
          <Information title="Você não tem nenhum Proffy favorito ainda ☹️" />
        )}
      </ScrollView>
    </View>
  );
};

export default Favorites;
