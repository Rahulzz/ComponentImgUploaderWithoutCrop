# ComponentImgUploaderWithoutCrop
React Native wrapper component around react-native-image-picker

Procedure to follow
- Copy the components folder to your codebase.
- Link UploadImage.js wherever you feel needed.
- Install react-native-image-picker library.
```
npm install react-native-image-picker --save
```
- Link the packages.
```
react-native link
```
- Android - Modify AndroidManifest.xml to include the following permissions  
```
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>   
```
- Run the app.


Additional details and setup for iOS can be found @ [React Native Image Picker](https://github.com/react-native-community/react-native-image-picker)
