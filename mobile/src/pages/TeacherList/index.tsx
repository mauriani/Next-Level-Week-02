import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { Feather } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Information from "../../components/Information";

import api from "../../services/api";

import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";

const Item = Picker.Item as any;

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState<string | number>("");
  const [week_day, setWeekDay] = useState<string | number>("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritesTeachers = JSON.parse(response);
        const favoritesTeachersIds = favoritesTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritesTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get("/classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    /** Fecha o filtro */
    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <Picker
              selectedValue={subject}
              style={styles.input}
              onValueChange={(value) => {
                setSubject(value);
              }}
              mode="dropdown"
            >
              <Item label="Artes" value="Artes" />
              <Item label="Biologia" value="Biologia" />
              <Item label="Biologia" value="Biologia" />
              <Item label="Educação Física" value="Educação Física" />
              <Item label="Física" value="Física" />
              <Item label="Geografia" value="Geografia" />
              <Item label="História" value="História" />
              <Item label="Matemática" value="Matemática" />
              <Item label="Português" value="Português" />
              <Item label="Quimíca" value="Quimíca" />
            </Picker>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <Picker
                  selectedValue={week_day}
                  style={styles.input}
                  onValueChange={(value) => {
                    setWeekDay(value);
                  }}
                  mode="dropdown"
                >
                  <Item label="Domingo" value="0" />
                  <Item label="Segunda-feira" value="1" />
                  <Item label="Terça-feira" value="2" />
                  <Item label="Quarta-feira" value="3" />
                  <Item label="Quinta-feira" value="4" />
                  <Item label="Sexta-feira" value="5" />
                  <Item label="Sábado" value="6" />
                </Picker>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual horário ?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}> Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          /*Forma melhor de fazer o padding para esse componente.*/
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.length >= 1 ? (
          teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
          })
        ) : (
          <Information title="Para fazer uma nova conexão pressione o icone." />
        )}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
