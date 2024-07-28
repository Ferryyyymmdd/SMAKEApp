import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>SMAKE</Text>
        <View style={styles.icons}>
          <Image source={require('../assets/images/bell.png')} style={styles.icon} />
          <Image source={require('../assets/images/user.png')} style={styles.icon} />
        </View>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Data"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../assets/images/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.menuTitle}>Menu</Text>
      <View style={styles.menuContainer}>
        <MenuItem title="Nilai Siswa" image={require('../assets/images/nilai.png')} />
        <MenuItem title="Disiplin Siswa" image={require('../assets/images/disiplin.png')} />
        <MenuItem title="Absensi" image={require('../assets/images/absensi.png')} />
        <MenuItem title="Informasi SPP" image={require('../assets/images/spp.png')} />
      </View>

      <Text style={styles.infoTitle}>INFORMASI</Text>
      <InfoItem
        title="Penerimaan Guru Baru"
        description="Kepala Sekolah Menyambut Guru"
        image={require('../assets/images/penerimaan_guru_baru.png')}
      />
      <InfoItem
        title="Merayakan Hari Guru"
        description="dalam rangka merayakan hari guru"
        image={require('../assets/images/merayakan_hari_guru.png')}
      />
    </ScrollView>
  );
};

const MenuItem = ({ title, image }) => (
  <TouchableOpacity style={styles.menuItem}>
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.menuGradient}>
      <Image source={image} style={styles.menuImage} />
      <Text style={styles.menuText}>{title}</Text>
      <TouchableOpacity style={styles.enrollButton}>
        <Text style={styles.enrollText}>Enroll Now</Text>
      </TouchableOpacity>
    </LinearGradient>
  </TouchableOpacity>
);

const InfoItem = ({ title, description, image }) => (
  <View style={styles.infoItem}>
    <Image source={image} style={styles.infoImage} />
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoTitleText}>{title}</Text>
      <Text style={styles.infoDescriptionText}>{description}</Text>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    backgroundColor: '#003087',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 15,
    marginHorizontal: 20,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  searchButton: {
    padding: 5,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  menuItem: {
    width: '45%',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  menuGradient: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  menuImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  enrollButton: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  enrollText: {
    color: '#fff',
    fontSize: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    elevation: 2,
  },
  infoImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  infoTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  infoDescriptionText: {
    color: '#666',
    marginVertical: 5,
  },
  continueButton: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  continueText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default HomeScreen;
