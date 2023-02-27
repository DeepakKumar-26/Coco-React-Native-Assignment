import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import {Snackbar} from 'react-native-paper';

const UserListItem = ({user, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container_userItem}>
      <View style={styles.container_userEmoticon}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          {user?.name.slice(0, 1)}
        </Text>
      </View>
      <Text>{user?.name}</Text>
    </TouchableOpacity>
  );
};

const ItemSeperatorComponent = () => {
  return <View style={{height: 1}}></View>;
};

export default function Users({navigation}) {
  const [users, setUsers] = useState([]);

  const netInfo = useNetInfo();

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        'http://jsonplaceholder.typicode.com/users',
      );
      setUsers(response.data);
      await storeData('users', response.data);
    } catch (error) {
      console.log(error);
      const data = await getData('users');
      setUsers(data);
    }
  };

  const handleShowUserDetails = user => {
    navigation.navigate('userDetails', {user: user});
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 10}}
        data={users}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <UserListItem
            user={item}
            onPress={() => handleShowUserDetails(item)}
          />
        )}
        ItemSeparatorComponent={<ItemSeperatorComponent />}
      />
      {netInfo.isConnected === false && (
        <Snackbar
          visible={true}
          onDismiss={() => {}}
          action={{
            label: 'Retry',
            onPress: () => {
              getUsers();
            },
          }}>
          No network connection !
        </Snackbar>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_userEmoticon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    aspectRatio: 1,
    backgroundColor: '#EFF6FB',
    marginRight: 10,
    borderRadius: 100,
  },
  container_userItem: {
    backgroundColor: '#CEE4F3',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
  },
});
