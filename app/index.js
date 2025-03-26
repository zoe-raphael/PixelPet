import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyContext } from "./_layout";

// Cette page a besoin des états hunger, happiness et energy pour fonctionner

export default function Home() {
  // Récupérez les états depuis votre contexte ici
  const { hunger, setHunger, happiness, setHappiness, energy, setEnergy } =
    useContext(MyContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PixelPet</Text>
      {/* Affichez les stats du PixelPet ici */}

      <Text style={styles.status}>hunger: {hunger}</Text>
      <Text style={styles.status}>happiness: {happiness}</Text>
      <Text style={styles.status}>energy: {energy}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "bold",
  },
});

