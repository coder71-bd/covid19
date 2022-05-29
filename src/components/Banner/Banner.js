import { Feather, Ionicons, MaterialIcons, Zocial } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import usaFlag from '../../../assets/usa_flag.png';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import Text from '../Text/Text';

export default function Banner() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* menu */}
        <View>
          <View
            style={{ ...styles.menu, width: 18, marginBottom: spacing[2] }}
          ></View>
          <View style={{ ...styles.menu, width: 12 }}></View>
        </View>
        <Ionicons
          name="ios-notifications-outline"
          size={18}
          color={colors.white}
        />
      </View>

      {/* heading */}
      <View
        style={{
          marginTop: spacing[8],
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text preset="h1">Covid-19</Text>
        <View style={styles.currency}>
          <Image source={usaFlag} width={10} height={10} />
          <Text preset="h4" style={{ textTransform: 'uppercase' }}>
            usa
          </Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={28}
            color={colors.blueGray}
          />
        </View>
      </View>

      {/* details */}
      <Text preset="h2" style={{ marginTop: spacing[10] }}>
        Are you feeling sick?
      </Text>
      <Text style={{ marginTop: spacing[3] }}>
        If you feel sick with any of covid-19 symptoms please call or SMS us
        immediately for help.
      </Text>

      {/* buttons */}
      <View style={styles.btnContainer}>
        <Pressable style={{ ...styles.btn, ...styles.callBtn }}>
          <Zocial name="call" size={20} color={colors.white} />
          <Text preset="h3">Call Now</Text>
        </Pressable>

        <Pressable style={{ ...styles.btn, ...styles.smsBtn }}>
          <Feather name="message-circle" size={20} color={colors.white} />
          <Text preset="h3">Send SMS</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkSlateBlue,
    height: 358,
    paddingHorizontal: spacing[6],
    paddingTop: spacing[14],
    paddingBottom: spacing[8],
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  menu: {
    borderBottomWidth: 2,
    borderColor: colors.white,
  },
  currency: {
    width: 116,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  btnContainer: {
    marginTop: spacing[4],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 155,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 50,
  },
  callBtn: {
    backgroundColor: colors.crayola,
  },
  smsBtn: {
    backgroundColor: colors.blueBerry,
  },
});
