import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function UserDetails({route}) {
  const {user} = route.params;

  return (
    <View style={{marginHorizontal: 10}}>
      <View style={[styles.card,{alignItems:'center'}]}>
        <View style={styles.container_emoticon}>
          <Text style={{fontSize: 50, fontWeight: 'bold'}}>
            {user.name.slice(0, 1)}
          </Text>
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        <Text style={{}}>{user.username}</Text>
      </View>

      <View style={styles.card}>
        <Text>Email : {user.email}</Text>
        <Text>Phone : {user.phone}</Text>
        <Text>Company : {user.company.name}</Text>
        <Text>Website : {user.website}</Text>

        <Text>Address : </Text>
        <View style={{paddingLeft: 20}}>
          <Text>Street - {user.address.street}</Text>
          <Text>Suite - {user.address.suite}</Text>
          <Text>City - {user.address.city}</Text>
          <Text>Zipcode - {user.address.zipcode}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#CEE4F3',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    elevation:3,
    shadowColor:'blue'
  },
  container_emoticon: {
    height: 100,
    aspectRatio: 1,
    backgroundColor: '#EFF6FB',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:20
  },
});
