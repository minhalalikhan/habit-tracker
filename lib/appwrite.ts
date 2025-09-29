import { Account, Client } from 'react-native-appwrite';

const ClientInstance = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!) // Your API Endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!) // Your project ID
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)

// .setSelfSigned(true); 
// Use only on dev mode with a self-signed certificate


export const account = new Account(ClientInstance);