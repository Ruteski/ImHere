import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

type TProps = {
   name: string
}

export function Participant({name}: TProps) {
   const handleParticipantDelete = () => {
      console.log('participante deletado');
   }

   return(
      <View style={styles.container}>
         <Text style={styles.name}>
            {name}
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