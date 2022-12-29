import {Text, View, TextInput, TouchableOpacity} from "react-native";

import {styles} from "./styles";

export default function Home(){
   const handleParticipantAdd = () => {
      console.log('vc clicou no botao de adicionar!');
   }

   return(
      <View style={styles.container}>
         <Text style={styles.eventName}>
            Nome do evento
         </Text>

         <Text style={styles.eventDate}>
            Sexta, 30 de dezembro de 2022.
         </Text>

         <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
         />

         <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}
         >
            <Text style={styles.buttonText}>
               +
            </Text>
         </TouchableOpacity>
      </View>
   )
}
