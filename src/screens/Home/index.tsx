import {Text, View, TextInput, TouchableOpacity, ScrollView} from "react-native";

import {Participant} from "../../components/Participant";

import {styles} from "./styles";

export default function Home(){
   const participants = ['Lincoln', 'Maisa', 'Noah', 'Mélanie', 'Anthony', 'Donathelo', 'Anthonela', 'Lilith',
      'Charlothe', 'Goku', 'Goha', 'Picollo'];
   const handleParticipantAdd = () => {
      console.log('vc clicou no botao de adicionar!');
   }

   const handleParticipantRemove = () => {
      console.log(`participante deletado`);
   }

   return(
      <View style={styles.container}>
         <Text style={styles.eventName}>
            Nome do evento
         </Text>

         <Text style={styles.eventDate}>
            Sexta, 30 de dezembro de 2022.
         </Text>

         <View style={styles.form}>
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

         <ScrollView
            showsVerticalScrollIndicator={false}
         >
            {
               participants.map(participant => (
                  <Participant
                     key={participant}
                     name={participant}
                     onRemove={handleParticipantRemove}
                  />
               ))
            }
         </ScrollView>


      </View>
   )
}
