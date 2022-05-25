import { StyleSheet, View,SafeAreaView,Platform,StatusBar,ScrollView,Image,Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { spacing } from '../themes/spacing';
import { colors } from '../themes/colors';

const Home = () => {
  return (
      
    <SafeAreaView >
      <View style={styles.headerContainer}>
        <Ionicons name="menu-outline" size={35} color="white" />
        <Ionicons name="notifications-outline" size={35} color="white" />
      </View>
      <ScrollView >
            <View style={styles.container}>   
                <View style={styles.headerTitle}>
                    <Text preset='h1'>Covid-19</Text>
                    <View style={styles.flagSection}>
                        <Image source={require('./../../assets/images/countryFlag.png')}/>
                        <Text  style={{color:'#0D1333' }}>USA</Text>
                    </View>
                </View>

                <View style={{marginVertical: spacing[4]}}>
                    <Text preset='h2'>Are you felling sick</Text>
                    <Text style={{marginTop: 20}}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
                </View>

                <View style={styles.buttonSection}>
                    <Pressable style={styles.button}>
                        <MaterialIcons name="call" size={24} color="white" />
                        <Text>Coll Now</Text>
                    </Pressable >

                    <Pressable style={[styles.button, { backgroundColor: colors.bBlue}]}>
                        <FontAwesome5 name="sms" size={24} color="white" />
                        <Text>Send SMS</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{padding: spacing[5]}}>
                <Text preset='h2' style={{color:'#0D1333'}} >Prevention</Text>
               <View style={styles.preventionSection}>
                    <View style={styles.prevention}>
                        <Image source={require('./../../assets/images/pImage1.png')}/>
                        <Text preset='h3'>Avoid close contact</Text>
                    </View> 
                    <View style={styles.prevention}>
                        <Image source={require('./../../assets/images/pImage2.png')}/>
                        <Text preset='h3'>Avoid close contact</Text>
                    </View> 
                    <View style={styles.prevention}>
                        <Image source={require('./../../assets/images/pImage3.png')}/>
                        <Text preset='h3'>Avoid close contact</Text>
                    </View> 
               </View>
              
            </View>

            <View  style={styles.follow}>
                <View style={styles.followSection}>
                    <Image   source={require('./../../assets/images/followImage.png')}/>

                    <View style={{width: 200}}>
                        <Text preset='h2' >Do your own test!</Text>
                        <Text  style={{marginTop: spacing[2]}}>Follow the instructions to do your own test.</Text>
                    </View>
                </View>
            </View>      
     </ScrollView>      

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.bannerBlue,
        borderBottomEndRadius: spacing[8],
        borderBottomStartRadius: spacing[8],
        padding: spacing[5],
        
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.bannerBlue,
        paddingTop :Platform.OS === "android" ? StatusBar.currentHeight:0,
        padding: spacing[5],
    },
    headerTitle:{
        marginVertical:spacing[2],
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    flagSection:{
        width:110,
        
        backgroundColor:colors.backRoColor,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:spacing[1],
        borderRadius: spacing[4]
    },
    buttonSection:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginVertical: spacing[5]
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:155,
        height:48,
        padding:spacing[1],
        backgroundColor: colors.bDanger,
        borderRadius: spacing[5]
    },
    preventionSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical: spacing[5]
    },
    prevention:{
        width:90,
        alignItems:'center'
        
    },
    follow:{
        padding: spacing[5],
        marginBottom: spacing[13]
    },
    followSection:{
        paddingHorizontal: spacing[3],
        paddingTop: spacing[3],
        marginBottom: spacing[12],
        backgroundColor: 'linear-gradient(90deg, rgba(174,161,229,1) 0%, rgba(86,84,158,1) 100%)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: spacing[3]


    }
})