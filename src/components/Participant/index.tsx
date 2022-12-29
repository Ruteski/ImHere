import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export function Participant() {
   const handleParticipantDelete = () => {
      console.log('participante deletado');
   }

   return(
      <View style={styles.container}>
         <Text style={styles.name}>
            Lincoln Ruteski
         </Text>

         <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantDelete}
         >
            <Text style={styles.buttonText}>
               -
            </Text>
         </TouchableOpacity>
      </View>
   )
}