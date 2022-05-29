import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, View } from 'react-native';
import nurse from '../../../assets/nurse.png';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import Text from '../Text/Text';

export default function Advert() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[colors.liberty, colors.bluePurple]}
        style={styles.gradientBg}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Image
          source={nurse}
          width={100}
          height={100}
          style={{ marginTop: -spacing[3], marginLeft: spacing[2] }}
        />
        <View>
          <Text preset="h3" style={{ paddingBottom: spacing[2] }}>
            Do your own test!
          </Text>
          <Text style={{ width: 170 }}>
            Follow the instructions to do your own test.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing[8],
    marginBottom: spacing[10],
  },
  gradientBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 104,
    borderRadius: 16,
  },
});
