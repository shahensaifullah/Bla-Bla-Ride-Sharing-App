import React, { useEffect, useState }  from 'react';
import {View} from 'react-native';

import {Center, Text} from 'native-base'
import {api} from "../api/client";

const YourApp = () => {

    const [message, setMessage] = useState("Loading...")


    useEffect(() => {
        api.get("/hello")
            .then((res) => {
                setMessage(res.data)
            })
            .catch(err => {
                setMessage("Error: " + err.message)
            })
    }, []);


    return (
        <View
            style={{
                flex: 1,
            }}>
            <Center>
                <Text fontSize="lg">{message}</Text>
            </Center>




        </View>
    );
};

export default YourApp;



