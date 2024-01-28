import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImagePickerComponent = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImagePicker = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel || response.error) {
                console.log('Image selection canceled or failed.');
            } else {
                const source = response.uri;
                setSelectedImages([...selectedImages, source]);
            }
        });
    };

    const handleUploadImages = () => {
    };

    return (
        <View>
            <Button title="Pick Images" onPress={handleImagePicker} />
            {selectedImages.map((image, index) => (
                <Image key={index} source={{ uri: image }} style={styles.image} />
            ))}
            <Button title="Upload Images" onPress={handleUploadImages} />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 5,
    },
});

export default ImagePickerComponent;
