# Real Estate Clone Using React Native

# Step

1. use `npx create-expo-app -t expo-template-blank-typescript` this will init the project in typescript

2. add the web support `npx expo install react-dom react-native-web @expo/webpack-config`

3. add React Navigation both native and stack `yarn add @react-navigation/native @react-navigation/stack @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer`

4. add expo react navigation dependencies and add gesture handle `npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler`

5. add reanimated
   `yarn add react-native-reanimated`

6. Add Reanimated's babel plugin to your babel.config.js:

```
 module.exports = {
    presets: [
      ...
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```

- make sure to restart the cache `npx expo start -c`

# preview

| Landing                      | Home                         | Detail Page                  |
| ---------------------------- | ---------------------------- | ---------------------------- |
| ![alt text](./preview/1.png) | ![alt text](./preview/2.png) | ![alt text](./preview/3.png) |

```

```
