import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

export default class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }
    render() {
        const { data, isLoading } = this.state;
        return (
            <View style={{ flex: 1, padding: 24 }}>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.id}, {item.title}, {item.releaseYear}</Text>
                        )}
                    />
                )}</View>
        );
    }
    componentDidMount() {
        fetch("http://reactnative.dev/movies.json")
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.movies });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false })
            });
    }
}