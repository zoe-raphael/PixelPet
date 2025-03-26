import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MyContext } from "./_layout";

// Cette page a besoin de la fonction feedPet et de l'état hunger pour fonctionner

export default function FoodScreen() {
  const { hunger, setHunger } = useContext(MyContext);
  // Récupérez la fonction feedPet et l'état hunger depuis votre contexte ici

  const feedPetWithCheck = (hunger, energy) => {
    // Implémentez la logique pour nourrir le PixelPet ici
    if (hunger > 0 || hunger < 100) {
      hunger = hunger - 20 && energy - 5;
    }
    return feedPetWithCheck;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nourrir votre PixelPet</Text>
      <TouchableOpacity style={styles.button} onPress={feedPetWithCheck}>
        <Text style={styles.buttonText}>Donner à manger</Text>
      </TouchableOpacity>
      <Text style={styles.status}>{hunger}</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

