import { FlatList, Image, StyleSheet, View } from 'react-native';
import prevention from '../../../data/prevention';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import Text from '../Text/Text';
export default function Preventions() {
  return (
    <View style={styles.container}>
      <Text preset="h2" style={{ color: colors.black }}>
        Prevention
      </Text>
      <FlatList
        data={prevention}
        keyExtractor={(item) => item.UpperText}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: spacing[6],
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <Image source={item.ImageSrc} width={90} height={90} />
              <Text preset="h4" style={{ textAlign: 'center' }}>
                {item.UpperText}
              </Text>
              <Text preset="h4" style={{ textAlign: 'center' }}>
                {item.BottomText}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacing[8],
    paddingHorizontal: spacing[6],
  },
  preventions: {},
});
