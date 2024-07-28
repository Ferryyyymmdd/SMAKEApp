import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const dataAbsensi = [
  { nama: 'Ferry Saptawan', kelas: '10', tanggal: '2024-12-31', status: 'Hadir' },
  { nama: 'Ferry Saptawan', kelas: '10', tanggal: '2024-07-12', status: 'Izin' },
];

const dataSiswa = [
  { nama: 'Feni Aster Aprilia', nis: '202102278', tanggalLahir: '2020-07-31', tempatLahir: 'Melawi', jenisKelamin: 'Perempuan', alamat: 'Pal Sekian' },
  { nama: 'Galileo Galilei', nis: '202302289', tanggalLahir: '2018-12-31', tempatLahir: 'Toscana', jenisKelamin: 'Laki-laki', alamat: 'Nanga Pinoh' },
  { nama: 'Ferry Saptawan', nis: '202102277', tanggalLahir: '2024-12-31', tempatLahir: 'Sambas', jenisKelamin: 'Laki-laki', alamat: 'Jl. Ampera' },
  { nama: 'kaji', nis: '290889999', tanggalLahir: '2002-04-23', tempatLahir: 'pontianak', jenisKelamin: 'Laki-laki', alamat: 'paal 7' },
];

const dataCatatanDisiplin = [
  { nama: 'Feni Aster Aprilia', kelas: '10', tanggal: '2024-07-22', catatan: 'berkelakuan baik' },
];

const Table = ({ title, data, headers }) => (
  <View style={styles.tableContainer}>
    <Text style={styles.tableTitle}>{title}</Text>
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {headers.map((header, index) => (
          <Text key={index} style={[styles.tableCell, styles.tableHeader]}>
            {header}
          </Text>
        ))}
      </View>
      {data.map((row, index) => (
        <View key={index} style={[styles.tableRow, index % 2 === 0 && styles.tableRowAlt]}>
          {Object.values(row).map((cell, cellIndex) => (
            <Text key={cellIndex} style={styles.tableCell}>
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  </View>
);

const CoursesScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      }
    ],
    legend: ["Attendance Rate"]
  };

  return (
    <ScrollView style={styles.container}>
      <Table
        title="Data Absensi"
        data={dataAbsensi}
        headers={['Nama', 'Kelas', 'Tanggal', 'Status']}
      />
      <Table
        title="Data Siswa"
        data={dataSiswa}
        headers={['Nama', 'NIS', 'Tanggal Lahir', 'Tempat Lahir', 'Jenis Kelamin', 'Alamat']}
      />
      <Table
        title="Catatan Disiplin"
        data={dataCatatanDisiplin}
        headers={['Nama', 'Kelas', 'Tanggal', 'Catatan']}
      />
      <Text style={styles.chartTitle}>Grafik Absensi</Text>
      <LineChart
        data={chartData}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726'
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  tableContainer: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#4c669f',
    color: '#fff',
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableRowAlt: {
    backgroundColor: '#f9f9f9',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
  },
  tableHeader: {
    backgroundColor: '#f7f7f7',
    fontWeight: 'bold',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default CoursesScreen;
