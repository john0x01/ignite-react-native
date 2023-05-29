import { View, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

import { Participant } from "../../components/Participant";
import { useState } from "react";

type Particpant = {
    name: string
}

export default function Home() {
    const [participants, setPaticipants] = useState<Particpant[]>([]);

    function handleAddParticipant() {
        setPaticipants([...participants, { name: "participante"}])
    }

    function handleRemoveParticipant() {
        // setPaticipants
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventTitle}>Nome do evento</Text>
            <Text style={styles.eventDate}>Segunda, 29 de maio</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor={"#6b6b6b"}
                />

                <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>


            {participants.map((participant) => {
                return (
                    <Participant name={participant.name} />
                )
            })}

            {/* <Participant name="Roberto Terrorista"/>
            <Participant name="Diego Fernandes"/> */}
            {/* <StatusBar  />   */}
        </View>
    )
}