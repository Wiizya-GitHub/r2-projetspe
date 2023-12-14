import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Filters = ({ currentFilter, setFilter }) => {
  return (
    <View style={styles.filters}>
      <Button
        title="Toutes"
        onPress={() => setFilter('all')}
        color={currentFilter === 'all' ? 'blue' : 'grey'}
      />
      <Button
        title="À faire"
        onPress={() => setFilter('active')}
        color={currentFilter === 'active' ? 'blue' : 'grey'}
      />
      <Button
        title="Terminées"
        onPress={() => setFilter('completed')}
        color={currentFilter === 'completed' ? 'blue' : 'grey'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default Filters;
