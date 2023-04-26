import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
 
const aPokemon = () => {
    const [pokemon, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
          const results = response.data.results;
          const newPokemons = [];
        }
    })    
}

export default aPokemon;